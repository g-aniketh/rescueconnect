import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";
import { FiAlertTriangle } from "react-icons/fi";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <FiAlertTriangle className="text-accent-yellow h-16 w-16 mb-4" />
      <h1 className="text-4xl font-bold text-primary mb-2">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-text-secondary mb-8">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary" size="lg">
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
