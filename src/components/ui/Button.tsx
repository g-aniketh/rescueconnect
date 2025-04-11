import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "emergency" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) => {
  const baseClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    emergency: "btn-emergency",
    outline: "btn-outline",
  };

  return (
    <button
      type={type}
      className={`${baseClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
