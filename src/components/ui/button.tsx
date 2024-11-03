import React from "react";
import { cn } from "@/utils/helpers";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline";
  className?: string;
}

export const Button = ({
  children,
  size = "md",
  variant,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-[50px] font-bold px-4 py-2 bg-transparent",
        {
          "bg-primary text-white border-0": variant === "primary",
          "bg-white border-2 border-primary": variant === "outline",
          "h-10": size === "sm",
          "h-12": size === "md",
          "h-[60px]": size === "lg",
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
