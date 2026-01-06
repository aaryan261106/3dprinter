import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Lock, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignIn = async () => {
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Check localStorage for user
      const users = JSON.parse(localStorage.getItem('printforge_users') || '[]');
      const user = users.find((u: any) => u.email === email);
      
      if (user) {
        localStorage.setItem('printforge_current_user', JSON.stringify(user));
        toast({
          title: 'Sign in successful!',
          description: 'Welcome back to PrintForge.',
        });
        navigate('/');
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm bg-card rounded-2xl shadow-xl shadow-primary/5 p-8 flex flex-col items-center border border-border"
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-xl gradient-glow mb-6 shadow-lg">
          <LogIn className="w-7 h-7 text-primary-foreground" />
        </div>
        
        <h2 className="font-display text-2xl font-bold mb-2 text-center">
          Welcome Back
        </h2>
        <p className="text-muted-foreground text-sm mb-6 text-center">
          Sign in to access your account and order history
        </p>

        <div className="w-full flex flex-col gap-3 mb-2">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Mail className="w-4 h-4" />
            </span>
            <input
              placeholder="Email"
              type="email"
              value={email}
              className="w-full pl-10 pr-3 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-secondary text-foreground text-sm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Lock className="w-4 h-4" />
            </span>
            <input
              placeholder="Password"
              type="password"
              value={password}
              className="w-full pl-10 pr-3 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-secondary text-foreground text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-between items-center">
            {error && (
              <span className="text-sm text-destructive">{error}</span>
            )}
            <button className="text-xs hover:underline font-medium text-primary ml-auto">
              Forgot password?
            </button>
          </div>
        </div>

        <Button
          onClick={handleSignIn}
          disabled={isLoading}
          className="w-full gradient-glow text-primary-foreground font-semibold py-5 mt-4"
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </Button>

        <div className="flex items-center w-full my-6">
          <div className="flex-grow border-t border-dashed border-border"></div>
          <span className="mx-3 text-xs text-muted-foreground">Or continue with</span>
          <div className="flex-grow border-t border-dashed border-border"></div>
        </div>

        <div className="flex gap-3 w-full justify-center">
          <button className="flex items-center justify-center w-12 h-12 rounded-lg border border-border bg-card hover:bg-secondary transition grow">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-6 h-6"
            />
          </button>
          <button className="flex items-center justify-center w-12 h-12 rounded-lg border border-border bg-card hover:bg-secondary transition grow">
            <img
              src="https://www.svgrepo.com/show/448224/facebook.svg"
              alt="Facebook"
              className="w-6 h-6"
            />
          </button>
          <button className="flex items-center justify-center w-12 h-12 rounded-lg border border-border bg-card hover:bg-secondary transition grow">
            <img
              src="https://www.svgrepo.com/show/511330/apple-173.svg"
              alt="Apple"
              className="w-6 h-6"
            />
          </button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary font-semibold hover:underline">
            Sign up
          </Link>
        </p>

        <Link to="/" className="mt-4 text-sm text-muted-foreground hover:text-foreground">
          ← Back to store
        </Link>
      </motion.div>
    </div>
  );
};

export default SignIn;
