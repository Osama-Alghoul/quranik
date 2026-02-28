import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection, {
  WhyQuranikSection,
  ProgramsPreviewSection,
  HowItWorksSection,
  TestimonialsSection,
  CTASection,
} from "@/components/home-sections";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyQuranikSection />
        <ProgramsPreviewSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
