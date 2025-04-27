
import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full py-3 px-4 bg-white dark:bg-card border-b border-border">
      <div className="flex items-center gap-2">
        <Link to="/" className="font-bold text-xl text-trendspotter-dark-blue dark:text-trendspotter-pale-blue">
          TrendSpotter<span className="text-trendspotter-light-blue">Invest</span>
        </Link>
      </div>
      
      <div className="hidden md:flex max-w-md w-full mx-4 relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
        <Input 
          type="search" 
          placeholder="Search for markets, sectors, keywords..." 
          className="pl-9 bg-secondary/50 focus:bg-background" 
        />
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-trendspotter-red text-[10px] text-white">3</span>
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
