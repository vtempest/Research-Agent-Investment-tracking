
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

const trendCardVariants = cva(
  "transition-all duration-300 hover:shadow-lg overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-card",
        featured: "bg-gradient-to-br from-trendspotter-blue to-trendspotter-dark-blue text-white",
        accent: "border-l-4 border-trendspotter-light-blue",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface TrendCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof trendCardVariants> {
  title: string;
  value?: string | number;
  subtitle?: string;
  change?: number;
  trend?: "up" | "down" | "neutral";
  tags?: Array<{
    label: string;
    type: "growth" | "caution" | "risk" | "neutral";
  }>;
  footer?: React.ReactNode;
  animated?: boolean;
}

const TrendCard = React.forwardRef<HTMLDivElement, TrendCardProps>(
  ({ className, variant, size, title, value, subtitle, change, trend, tags, footer, animated = true, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          trendCardVariants({ variant, size }), 
          animated ? "animate-enter" : "",
          className
        )}
        {...props}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium">{title}</CardTitle>
            {tags && tags.length > 0 && (
              <div className="flex gap-1">
                {tags.map((tag, i) => (
                  <span key={i} className={`trend-tag trend-tag-${tag.type}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            )}
          </div>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </CardHeader>
        
        <CardContent className="pb-2">
          <div className="flex items-end justify-between">
            {value && <div className="text-2xl font-bold">{value}</div>}
            {trend && change !== undefined && (
              <div className="flex items-center gap-1">
                {trend === "up" ? (
                  <>
                    <TrendingUp className="h-4 w-4 text-trendspotter-green" />
                    <span className="stat-change-up">+{change}%</span>
                  </>
                ) : trend === "down" ? (
                  <>
                    <TrendingDown className="h-4 w-4 text-trendspotter-red" />
                    <span className="stat-change-down">-{change}%</span>
                  </>
                ) : (
                  <span className="text-muted-foreground">{change}%</span>
                )}
              </div>
            )}
          </div>
        </CardContent>
        
        {footer && <CardFooter className="pt-2">{footer}</CardFooter>}
      </Card>
    );
  }
);

TrendCard.displayName = "TrendCard";

export default TrendCard;
