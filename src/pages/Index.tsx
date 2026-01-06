import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { CartDrawer } from '@/components/CartDrawer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      <HeroSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
