import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold tracking-tighter ",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl, md:text-6xl lg:text-7xl",
        sm: "text-2xl, md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

// eslint-disable-next-line react/display-name
const Paragraph = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headingVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

Paragraph.displayName = "Paragraph";
export default Paragraph;
