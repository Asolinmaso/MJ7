import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/sendContactEmail";

export const runtime = "nodejs";

type ContactBody = {
  firstName?: string;
  email?: string;
  contact?: string;
  location?: string;
  message?: string;
};

function corsHeaders(): HeadersInit {
  const origin = process.env.CORS_ORIGIN ?? "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function validate(body: ContactBody): string | null {
  const firstName = body.firstName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const contact = body.contact ?? "";
  const location = body.location?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (firstName.length < 5) return "First name must be at least 5 characters";
  if (!/^\S+@\S+\.\S+$/.test(email)) return "Valid email is required";
  if (!/^\d{10}$/.test(contact)) return "Contact number must be exactly 10 digits";
  if (!location) return "Location is required";
  if (message.length < 8) return "Message must be at least 8 characters";
  return null;
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() });
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body" },
      { status: 400, headers: corsHeaders() },
    );
  }

  const err = validate(body);
  if (err) {
    return NextResponse.json({ message: err }, { status: 400, headers: corsHeaders() });
  }

  const firstName = body.firstName!.trim();
  const email = body.email!.trim();
  const contact = body.contact!;
  const location = body.location!.trim();
  const message = body.message!.trim();

  const text = [
    `Name: ${firstName}`,
    `Email: ${email}`,
    `Phone: ${contact}`,
    `Location: ${location}`,
    "",
    message,
  ].join("\n");

  try {
    await sendContactEmail(`Website contact: ${firstName}`, text);
  } catch (e) {
    console.error("[contact] send failed", e);
    return NextResponse.json(
      { message: "Could not send message. Please try again later." },
      { status: 502, headers: corsHeaders() },
    );
  }

  return NextResponse.json(
    { message: "Message sent successfully!" },
    { status: 200, headers: corsHeaders() },
  );
}
