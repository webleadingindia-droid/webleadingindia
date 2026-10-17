'use client';

import { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import ServicesSection from '@/components/ui/services-section';

export default function ServicesPage() {  

  return (
    <main className="min-h-screen">
      <Navbar />

      <ServicesSection />

      <Footer />
    </main>
  );
}