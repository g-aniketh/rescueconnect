// src/components/specific/EmergencyContactCard.tsx
import React from "react";
import { FiPhone, FiGlobe, FiMail } from "react-icons/fi";
import { EmergencyContact } from "@/types";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import { Link } from "react-router-dom";

interface EmergencyContactCardProps {
  contact: EmergencyContact;
  className?: string;
}

const EmergencyContactCard: React.FC<EmergencyContactCardProps> = ({
  contact,
  className,
}) => {
  return (
    <Card className={className}>
      <div className="flex flex-col space-y-2">
        <h4 className="text-base font-semibold text-text-primary">
          {contact.name}
        </h4>
        {contact.description && (
          <p className="text-sm text-text-secondary">{contact.description}</p>
        )}
        {contact.phone && (
          <a
            href={`tel:${contact.phone.replace(/\s|-/g, "")}`} // Clean phone number for tel link
            className="flex items-center text-sm text-primary hover:text-primary-dark group"
          >
            <FiPhone className="mr-2 h-4 w-4 text-secondary group-hover:text-primary-dark transition-colors" />
            {contact.phone}
          </a>
        )}
        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center text-sm text-primary hover:text-primary-dark group"
          >
            <FiMail className="mr-2 h-4 w-4 text-secondary group-hover:text-primary-dark transition-colors" />
            {contact.email}
          </a>
        )}
        {contact.website && (
          <a
            href={contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-primary hover:text-primary-dark group"
          >
            <FiGlobe className="mr-2 h-4 w-4 text-secondary group-hover:text-primary-dark transition-colors" />
            Visit Website
          </a>
        )}
      </div>
      {/* Optional: Add a 'Call Now' button directly */}
      {contact.phone && (
        <div className="mt-4 pt-4 border-t border-secondary-light">
          <Link
            to={`tel:${contact.phone.replace(/\s|-/g, "")}`}
            className="ml-4 w-full"
          >
            <Button variant="success" size="sm" iconLeft={<FiPhone />}>
              Call Now
            </Button>
          </Link>
        </div>
      )}
    </Card>
  );
};

export default EmergencyContactCard;
