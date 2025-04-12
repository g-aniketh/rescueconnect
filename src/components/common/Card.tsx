// src/components/common/Card.tsx
import React from "react";
import clsx from "clsx";
import { CardProps } from "@/types";

const Card: React.FC<CardProps> = ({
  children,
  className,
  title,
  titleIcon,
  footer,
  actions, // Expecting JSX for actions
  ...props
}) => {
  return (
    <div
      className={clsx(
        "bg-background-paper border border-secondary-light rounded-lg shadow-sm overflow-hidden",
        className
      )}
      {...props}
    >
      {title && (
        <div className="px-4 py-3 border-b border-secondary-light sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-text-primary flex items-center">
            {titleIcon && (
              <span className="mr-2 text-primary">{titleIcon}</span>
            )}
            {title}
          </h3>
        </div>
      )}
      <div className="px-4 py-5 sm:p-6">{children}</div>
      {actions && (
        <div className="px-4 py-3 bg-gray-50 sm:px-6 border-t border-secondary-light">
          <div className="flex justify-end space-x-3">
            {" "}
            {/* Adjust alignment/spacing as needed */}
            {actions}
          </div>
        </div>
      )}
      {footer && (
        <div className="px-4 py-3 bg-gray-50 sm:px-6 border-t border-secondary-light text-sm text-text-secondary">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
