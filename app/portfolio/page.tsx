'use client';

import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import PortfolioSection from '@/components/ui/portfolio-section';

export default function HealthcarePortfolioPage() {

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
        <PortfolioSection />
      <Footer />
    </main>
  );
}