import HeroSection from "@/components/sections/hero";
import WhyQuranikSection from "@/components/sections/why-quranik";
import ProgramsPreviewSection from "@/components/sections/programs-preview";
import HowItWorksSection from "@/components/sections/how-it-works";
import TestimonialsSection from "@/components/sections/testimonials";
import CTASection from "@/components/sections/cta";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyQuranikSection />
      <ProgramsPreviewSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
