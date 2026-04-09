import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/sendContactEmail";

export const runtime = "nodejs";

type MeetingBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  availableDate?: string;
  category?: string;
  reason?: string;
};

function corsHeaders(): HeadersInit {
  const origin = process.env.CORS_ORIGIN ?? "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function validate(body: MeetingBody): string | null {
  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone ?? "";
  const date = body.availableDate ?? "";
  const category = body.category ?? "";
  const reason = body.reason?.trim() ?? "";

  if (firstName.length < 5) return "First name must be at least 5 characters";
  if (!lastName) return "Last name is required";
  if (!/^\S+@\S+\.\S+$/.test(email)) return "Enter a valid email address";
  if (!/^\d{10}$/.test(phone)) return "Phone number must be exactly 10 digits";
  if (!category) return "Please select a category";
  if (reason.length < 8) return "Reason must be at least 8 characters";
  if (!date) return "Please select an available date";
  return null;
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() });
}

export async function POST(request: Request) {
  let body: MeetingBody;
  try {
    body = (await request.json()) as MeetingBody;
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
  const lastName = body.lastName!.trim();
  const email = body.email!.trim();
  const phone = body.phone!;
  const availableDate = body.availableDate!;
  const category = body.category!;
  const reason = body.reason!.trim();

  const text = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Preferred date: ${availableDate}`,
    `Category: ${category}`,
    "",
    reason,
  ].join("\n");

  try {
    await sendContactEmail(`Meeting request: ${firstName} ${lastName}`, text);
  } catch (e) {
    console.error("[meeting] send failed", e);
    return NextResponse.json(
      { message: "Could not submit meeting request. Please try again later." },
      { status: 502, headers: corsHeaders() },
    );
  }

  return NextResponse.json(
    { message: "Meeting request submitted successfully!" },
    { status: 200, headers: corsHeaders() },
  );
}
