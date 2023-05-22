import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const largeHeadingVariants = cva("text-slate-200 tracking-tight", {
  variants: {
    size: {
      default: "text-4xl sm:text-5xl font-extrabold",
      lg: "text-5xl md:text-6xl lg:text-7xl font-extrabold",
      sm: "text-lg sm:text-xl font-medium",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof largeHeadingVariants> {}

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => (
    <h1
      ref={ref}
      {...props}
      className={cn(largeHeadingVariants({ size, className }))}
    >
      {children}
    </h1>
  )
);

LargeHeading.displayName = "LargeHeading";

export default LargeHeading;
