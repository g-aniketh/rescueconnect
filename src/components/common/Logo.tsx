// src/components/common/Logo.tsx
import React from "react";
import { Link } from "react-router-dom";
// import logoImage from '@/assets/your-logo.png'; // Uncomment and replace if you have an image logo

interface LogoProps {
  className?: string;
  type?: "full" | "icon"; // Add variations if needed
}

const Logo: React.FC<LogoProps> = ({ className = "", type = "full" }) => {
  return (
    <Link to="/" className={`inline-block ${className}`}>
      {/* If using an image logo: */}
      {/* <img src={logoImage} alt="Rescue Connect Logo" className="h-8 w-auto" /> */}

      {/* If using a text logo: */}
      <span className="text-2xl font-bold text-primary font-logo">
        Rescue Connect
      </span>
    </Link>
  );
};

export default Logo;
