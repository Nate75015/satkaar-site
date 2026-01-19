import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-oso-xs px-2 py-2 text-sm font-medium font-body transition-colors",
  {
    variants: {
      variant: {
        default: "bg-bleu-50 text-gris-70",
        rose: "bg-rose-10 text-gris-70",
        vert: "bg-vert-50 text-gris-70",
        jaune: "bg-jaune-10 text-gris-70",
        bleu: "bg-bleu-50 text-gris-70",
        outline: "border border-gris-20 text-gris-70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
