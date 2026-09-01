"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-mono text-sm font-semibold tracking-wider uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-bg-primary hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(223,255,0,0.3)] active:scale-[0.98]",
        secondary:
          "border border-border bg-transparent text-text-primary hover:border-accent/50 hover:text-accent active:scale-[0.98]",
        ghost:
          "text-text-secondary hover:text-text-primary hover:bg-white/5",
      },
      size: {
        sm: "h-9 px-5 text-xs rounded-md",
        md: "h-11 px-7 text-sm rounded-lg",
        lg: "h-14 px-10 text-base rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
