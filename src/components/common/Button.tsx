import React from "react";
import clsx from "clsx";
import { CgSpinner } from "react-icons/cg"; // Loading spinner icon
import { ButtonProps } from "@/types";

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  iconLeft,
  iconRight,
  type = "button", // Default type to button
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
    secondary:
      "bg-background border border-secondary text-text-primary hover:bg-secondary-light focus:ring-primary",
    danger: "bg-accent-red text-white hover:bg-red-700 focus:ring-accent-red",
    success:
      "bg-accent-green text-white hover:bg-green-700 focus:ring-accent-green",
    ghost: "bg-transparent text-primary hover:bg-primary/10 focus:ring-primary",
    link: "bg-transparent text-primary hover:underline focus:ring-primary p-0 shadow-none",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const isDisabled = isLoading || disabled;

  return (
    <button
      type={type}
      className={clsx(
        baseStyle,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && <CgSpinner className="animate-spin -ml-1 mr-2 h-4 w-4" />}
      {iconLeft && !isLoading && (
        <span className="mr-2 -ml-1 h-5 w-5">{iconLeft}</span>
      )}
      {children}
      {iconRight && !isLoading && (
        <span className="ml-2 -mr-1 h-5 w-5">{iconRight}</span>
      )}
    </button>
  );
};

export default Button;
