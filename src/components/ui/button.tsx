// import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";
// import { cn } from "@/lib/utils";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500",
//         destructive: "bg-error-500 text-white hover:bg-error-600 focus:ring-error-500",
//         outline: "border border-neutral-300 bg-background hover:bg-neutral-50 hover:text-neutral-900 focus:ring-neutral-500",
//         secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 focus:ring-neutral-500",
//         ghost: "hover:bg-neutral-100 hover:text-neutral-900 focus:ring-neutral-500",
//         link: "text-primary-500 underline-offset-4 hover:underline focus:ring-primary-500",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-11 rounded-md px-8",
//         xl: "h-12 rounded-lg px-10 text-lg",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean;
//   loading?: boolean;
//   icon?: React.ReactNode;
//   iconPosition?: "left" | "right";
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, loading, icon, iconPosition = "left", children, disabled, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button";

//     const isDisabled = disabled || loading;

//     const renderIcon = () => {
//       if (loading) {
//         return (
//           <svg
//             className="animate-spin -ml-1 mr-2 h-4 w-4"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               strokeWidth="4"
//             />
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//             />
//           </svg>
//         );
//       }

//       if (icon) {
//         return <span className={iconPosition === "left" ? "mr-2" : "ml-2"}>{icon}</span>;
//       }

//       return null;
//     };

//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         disabled={isDisabled}
//         {...props}
//       >
//         {iconPosition === "left" && renderIcon()}
//         {children}
//         {iconPosition === "right" && renderIcon()}
//       </Comp>
//     );
//   }
// );
// Button.displayName = "Button";

// export { Button, buttonVariants };
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500",
        destructive:
          "bg-error-500 text-white hover:bg-error-600 focus:ring-error-500",
        outline:
          "border border-neutral-300 bg-background hover:bg-neutral-50 hover:text-neutral-900 focus:ring-neutral-500",
        secondary:
          "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 focus:ring-neutral-500",
        ghost:
          "hover:bg-neutral-100 hover:text-neutral-900 focus:ring-neutral-500",
        link: "text-primary-500 underline-offset-4 hover:underline focus:ring-primary-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-lg",
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
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading,
      icon,
      iconPosition = "left",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp: any = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    const IconNode = () => {
      if (loading) {
        return (
          <svg
            className={cn(
              "animate-spin h-4 w-4",
              iconPosition === "left" ? "-ml-1 mr-2" : "ml-2"
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        );
      }
      if (icon) {
        return (
          <span className={iconPosition === "left" ? "mr-2" : "ml-2"}>
            {icon}
          </span>
        );
      }
      return null;
    };

    // اگر asChild روشن است، باید Slot فقط یک بچه بگیرد.
    // پس بچه (مثلاً <Link>) را clone می‌کنیم و آیکن‌ها را داخل همان قرار می‌دهیم.
    if (asChild && React.isValidElement(children)) {
      const inner =
        iconPosition === "left" ? (
          <>
            <IconNode />
            {children.props.children}
          </>
        ) : (
          <>
            {children.props.children}
            <IconNode />
          </>
        );

      const mergedClassName = cn(
        buttonVariants({ variant, size }),
        className,
        children.props.className
      );

      const clonedChild = React.cloneElement(
        children,
        { className: mergedClassName },
        inner
      );

      return (
        <Comp ref={ref} disabled={isDisabled} {...props}>
          {clonedChild}
        </Comp>
      );
    }

    // حالت عادی (بدون asChild): مشکلی با چند نود نیست
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {iconPosition === "left" && <IconNode />}
        {children}
        {iconPosition === "right" && <IconNode />}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
