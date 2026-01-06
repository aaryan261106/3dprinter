import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "The quality of these 3D prints is absolutely incredible. The Darth Vader bust looks like it came straight from a movie prop studio!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Aman Rathod",
    role: "Star Wars Collector",
  },
  {
    text: "My piston lamp is the centerpiece of my office. Everyone asks where I got it. Absolutely stunning craftsmanship.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Hemant Panhal",
    role: "Interior Designer",
  },
  {
    text: "Fast shipping and the packaging was perfect. The Minecraft ore lamp exceeded my expectations!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Mohank Lad",
    role: "Gaming Enthusiast",
  },
  {
    text: "I've bought from many 3D print shops, but the detail and finish quality here is unmatched. Will definitely order again!",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Vaishnavi Sharma",
    role: "Model Kit Builder",
  },
  {
    text: "The brake caliper lamp with the glowing rotor effect is mind-blowing. Perfect gift for any car enthusiast.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Jenil Kushwaha",
    role: "Automotive Engineer",
  },
  {
    text: "Customer service was amazing. They helped me choose the perfect piece for my collection. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Divya Aher",
    role: "Art Collector",
  },
];

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const TestimonialsColumn = ({
  items,
  duration = 15,
  className = "",
}: {
  items: Testimonial[];
  duration?: number;
  className?: string;
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
      {[...Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            {items.map((testimonial, i) => (
              <div
                className="p-6 rounded-2xl border border-border bg-card shadow-lg shadow-primary/5"
                key={`${idx}-${i}`}
              >
                <p className="text-foreground/90 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full ring-2 ring-primary/20"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold tracking-tight leading-5">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-muted-foreground leading-5">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export function TestimonialsSection() {
  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 6);

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            What Our <span className="text-gradient">Collectors</span> Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of satisfied collectors who've found their perfect pieces
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn items={firstColumn} duration={18} />
          <TestimonialsColumn items={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn items={thirdColumn} className="hidden lg:block" duration={20} />
        </div>
      </div>
    </section>
  );
}
