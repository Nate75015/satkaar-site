import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[53px] w-full rounded-oso-s border border-gris-20 bg-white px-4 py-[15px] text-base font-body text-gris-70 placeholder:text-gris-40 transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-bleu-200 focus:border-bleu-200",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
