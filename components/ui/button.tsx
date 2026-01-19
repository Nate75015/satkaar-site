import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-oso-s text-base font-semibold font-body transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-bleu-200 text-white hover:bg-bleu-300 active:bg-bleu-400",
        secondary:
          "bg-rose-300 text-white hover:bg-rose-500 active:bg-rose-900",
        outline:
          "border-[1.5px] border-bleu-200 bg-white text-bleu-200 hover:bg-bleu-50 active:bg-bleu-100",
        ghost:
          "text-gris-70 hover:bg-gris-10 hover:text-gris-80",
        link:
          "text-bleu-200 underline-offset-4 hover:underline",
        "link-rose":
          "text-rose-200 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-14 px-6 py-4",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-16 px-8 py-5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
