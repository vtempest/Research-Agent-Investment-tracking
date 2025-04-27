
import React, { useState } from 'react';
import { 
  ChartBar, TrendingUp, Search, Calendar, Settings, Database
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useNavigate } from 'react-router-dom';

type NavItemProps = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
  route?: string;
};

const NavItem = ({ icon: Icon, label, active, onClick, route }: NavItemProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (route) {
      navigate(route);
    }
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant={active ? "secondary" : "ghost"} 
            size="default"
            className={cn(
              "w-full justify-start gap-3 mb-1",
              active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent/50"
            )}
            onClick={handleClick}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-sidebar-background border-sidebar-accent text-sidebar-foreground">
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const SidebarNav = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: ChartBar, route: '/' },
    { id: 'prediction-markets', label: 'Prediction Markets', icon: Database, route: '/prediction-markets' },
    { id: 'trends', label: 'Market Trends', icon: TrendingUp },
    { id: 'research', label: 'Research', icon: Search },
    { id: 'planner', label: 'Planner', icon: Calendar },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="h-full w-64 border-r border-sidebar-border bg-sidebar flex flex-col">
      <div className="p-4 flex-1">
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavItem 
              key={item.id}
              icon={item.icon} 
              label={item.label} 
              active={activeItem === item.id}
              onClick={() => setActiveItem(item.id)}
              route={item.route}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
