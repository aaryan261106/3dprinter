import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, Product } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart, setIsCartOpen } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: 'Added to cart!',
      description: `${product.name} has been added to your cart.`,
    });
    setIsCartOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group card-hover"
    >
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick Actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="icon"
              variant="secondary"
              className="bg-card/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
            >
              <Eye className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              onClick={handleAddToCart}
              className="gradient-glow text-primary-foreground hover:scale-110 transition-transform"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-card/80 backdrop-blur-sm border border-border">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display font-semibold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-bold text-primary">
              ${product.price}
            </span>
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="gradient-glow text-primary-foreground"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
