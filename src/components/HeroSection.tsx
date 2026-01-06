import React from 'react';
import { motion } from 'framer-motion';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Flickering Grid Background */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="rgb(249, 115, 22)"
        maxOpacity={0.15}
        flickerChance={0.1}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Handcrafted 3D Printed Art</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="font-display text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight mb-4">
              <span className="text-foreground">PREMIUM</span>
            </h1>
            <h1 className="font-display text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight mb-4">
              <span className="text-gradient glow-text">3D PRINTED</span>
            </h1>
            <h1 className="font-display text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight">
              <span className="text-foreground">COLLECTIBLES</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl text-center mb-12"
          >
            From iconic character busts to functional art pieces. Each creation is meticulously 
            designed and printed to perfection for collectors who demand excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/shop">
              <Button size="lg" className="gradient-glow text-primary-foreground font-semibold px-8 py-6 text-lg glow-effect">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-8 md:gap-16"
          >
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground text-sm md:text-base">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground text-sm md:text-base">Premium Quality</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground text-sm md:text-base">Unique Designs</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
