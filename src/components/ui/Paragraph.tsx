import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const paragraphVariants = cva("max-w-prose mb-2", {
  variants: {
    size: {
      default: "text-base sm:text-lg ",
      sm: "text-sm sm:text-base",
      xs: "text-xs sm:text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => (
    <p
      ref={ref}
      {...props}
      className={cn(paragraphVariants({ size, className }))}
    >
      {children}
    </p>
  )
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
