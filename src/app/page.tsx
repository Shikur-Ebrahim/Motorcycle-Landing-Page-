import HeroSection from "@/components/HeroSection";
import MotorcyclesSection from "@/components/MotorcyclesSection";
import GallerySection from "@/components/GallerySection";
import LicenseSection from "@/components/LicenseSection";
import FeaturesSection from "@/components/FeaturesSection";
import CallSection from "@/components/CallSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* SECTION 1: Hero */}
      <HeroSection />

      {/* SECTION 2: Main Motorcycle Models */}
      <MotorcyclesSection />

      {/* SECTION 3: Gallery / Additional Models */}
      <GallerySection />

      {/* SECTION 4: Business License */}
      <LicenseSection />

      {/* SECTION 5: Why Choose Us */}
      <FeaturesSection />

      {/* SECTION 6: Call to Action */}
      <CallSection />

      {/* Footer */}
      <Footer />

      {/* Floating Call Button - always visible */}
      <FloatingCallButton />
    </main>
  );
}
