import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/hero-section';
import ServicesSection from '@/components/ui/services-section';
import AboutSection from '@/components/ui/about-section';
import StatsSection from '@/components/ui/stats-section';
import PortfolioSection from '@/components/ui/portfolio-section';
import TestimonialsSection from '@/components/ui/testimonials-section';
import ProcessSection from '@/components/ui/process-section';
import CTASection from '@/components/ui/cta-section';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <PortfolioSection />
      <CTASection />
      <ProcessSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}