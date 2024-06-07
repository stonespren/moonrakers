import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const textVariants = cva("", {
  variants: {
    affects: {
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
});

export interface PProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}
export const P = React.forwardRef<HTMLParagraphElement, PProps>(
  ({ className, affects, ...props }, ref) => {
    return (
      <p
        className={cn(
          "leading-7 [&:not(:first-child)]:mt-6",
          textVariants({ affects, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
P.displayName = "P";

export interface H1Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof textVariants> {}
export const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, affects, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
          textVariants({ affects, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
H1.displayName = "H1";

export interface H2Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof textVariants> {}
export const H2 = React.forwardRef<HTMLHeadingElement, H2Props>(
  ({ className, affects, ...props }, ref) => {
    return (
      <h2
        className={cn(
          "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
          textVariants({ affects, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
H2.displayName = "H2";

export interface H3Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof textVariants> {}
export const H3 = React.forwardRef<HTMLHeadingElement, H3Props>(
  ({ className, affects, ...props }, ref) => {
    return (
      <h3
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight",
          textVariants({ affects, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
H3.displayName = "H3";

export interface H4Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof textVariants> {}
export const H4 = React.forwardRef<HTMLHeadingElement, H4Props>(
  ({ className, affects, ...props }, ref) => {
    return (
      <h4
        className={cn(
          "scroll-m-20 text-xl font-semibold tracking-tight",
          textVariants({ affects, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
H4.displayName = "H4";

export interface H5Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof textVariants> {}
export const H5 = React.forwardRef<HTMLHeadingElement, H5Props>(
  ({ className, affects, ...props }, ref) => {
    return (
      <h5
        className={cn("", textVariants({ affects, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
H5.displayName = "H5";

export interface H6Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof textVariants> {}
export const H6 = React.forwardRef<HTMLHeadingElement, H6Props>(
  ({ className, affects, ...props }, ref) => {
    return (
      <h6
        className={cn("", textVariants({ affects, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
H6.displayName = "H6";

export interface BlockQuoteProps
  extends React.HTMLAttributes<HTMLQuoteElement>,
    VariantProps<typeof textVariants> {}
export const BlockQuote = React.forwardRef<HTMLQuoteElement, BlockQuoteProps>(
  ({ className, affects, ...props }, ref) => {
    return (
      <blockquote
        className={cn(
          "mt-6 border-l-2 pl-6 italic",
          textVariants({ affects, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
BlockQuote.displayName = "BlockQuote";

export interface CodeProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {}
export const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, affects, ...props }, ref) => {
    return (
      <code
        className={cn(
          "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
          textVariants({ affects, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Code.displayName = "Code";

export interface UlProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof textVariants> {}
export const Ul = React.forwardRef<HTMLUListElement, UlProps>(
  ({ className, affects, ...props }, ref) => {
    return (
      <ul
        className={cn(
          "my-6 ml-6 list-disc [&>li]:mt-2",
          textVariants({ affects, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Ul.displayName = "Ul";

export interface OlProps
  extends React.HTMLAttributes<HTMLOListElement>,
    VariantProps<typeof textVariants> {}
export const Ol = React.forwardRef<HTMLOListElement, OlProps>(
  ({ className, affects, ...props }, ref) => {
    return (
      <ol
        className={cn("", textVariants({ affects, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Ol.displayName = "Ol";

export interface LiProps
  extends React.HTMLAttributes<HTMLLIElement>,
    VariantProps<typeof textVariants> {}
export const Li = React.forwardRef<HTMLLIElement, LiProps>(
  ({ className, affects, ...props }, ref) => {
    return (
      <li
        className={cn("", textVariants({ affects, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Li.displayName = "Li";
