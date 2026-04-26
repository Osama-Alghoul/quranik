import HeroSection, {
  WhyQuranikSection,
  ProgramsPreviewSection,
  HowItWorksSection,
  TestimonialsSection,
  CTASection,
} from "@/components/home-sections";

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
