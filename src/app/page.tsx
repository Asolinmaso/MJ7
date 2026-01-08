import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="relative">
        {/* Banner Section */}
        <Banner />
        
        {/* About Us Section */}
        <AboutUs />
      </main>
    </div>
  );
}
