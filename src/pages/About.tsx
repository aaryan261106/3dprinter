import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { Box, Printer, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Printer, label: '3D Printers', value: '12+' },
    { icon: Users, label: 'Happy Customers', value: '5000+' },
    { icon: Box, label: 'Products Made', value: '10000+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">PrintForge</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're passionate about bringing imagination to life through 3D printing. 
              From iconic collectibles to functional art pieces, every item is crafted 
              with precision and care using state-of-the-art printing technology.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12"
          >
            <h2 className="font-display text-2xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                PrintForge started with a simple idea: make high-quality 3D printed 
                collectibles accessible to everyone. What began as a hobby in a small 
                workshop has grown into a passionate team of designers and engineers.
              </p>
              <p>
                Every piece we create goes through rigorous quality control. We use 
                premium materials and advanced printing techniques to ensure each 
                product meets our exacting standards.
              </p>
              <p>
                Whether you're a collector, gamer, or just looking for unique decor, 
                we're here to bring your favorite characters and designs to life.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
