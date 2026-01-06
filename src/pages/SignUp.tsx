import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Lock, Mail, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignUp = async () => {
    setError('');
    
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    
    try {
      // Store user data locally for now (will be replaced with Google Sheets API)
      const userData = {
        name,
        email,
        createdAt: new Date().toISOString(),
      };
      
      // Save to localStorage as temporary solution
      const users = JSON.parse(localStorage.getItem('printforge_users') || '[]');
      
      // Check if email already exists
      if (users.find((u: any) => u.email === email)) {
        setError('An account with this email already exists.');
        setIsLoading(false);
        return;
      }
      
      users.push(userData);
      localStorage.setItem('printforge_users', JSON.stringify(users));
      localStorage.setItem('printforge_current_user', JSON.stringify(userData));
      
      toast({
        title: 'Account created!',
        description: 'Welcome to PrintForge.',
      });
      
      navigate('/');
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
          <UserPlus className="w-7 h-7 text-primary-foreground" />
        </div>
        
        <h2 className="font-display text-2xl font-bold mb-2 text-center">
          Create Account
        </h2>
        <p className="text-muted-foreground text-sm mb-6 text-center">
          Join PrintForge to start collecting
        </p>

        <div className="w-full flex flex-col gap-3 mb-2">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <User className="w-4 h-4" />
            </span>
            <input
              placeholder="Full Name"
              type="text"
              value={name}
              className="w-full pl-10 pr-3 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-secondary text-foreground text-sm"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Lock className="w-4 h-4" />
            </span>
            <input
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              className="w-full pl-10 pr-3 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-secondary text-foreground text-sm"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && (
            <span className="text-sm text-destructive">{error}</span>
          )}
        </div>

        <Button
          onClick={handleSignUp}
          disabled={isLoading}
          className="w-full gradient-glow text-primary-foreground font-semibold py-5 mt-4"
        >
          {isLoading ? 'Creating Account...' : 'Sign Up'}
        </Button>

        <p className="mt-6 text-sm text-muted-foreground text-center">
          Already have an account?{' '}
          <Link to="/signin" className="text-primary font-semibold hover:underline">
            Sign in
          </Link>
        </p>

        <Link to="/" className="mt-4 text-sm text-muted-foreground hover:text-foreground">
          ← Back to store
        </Link>
      </motion.div>
    </div>
  );
};

export default SignUp;
