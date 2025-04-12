// src/pages/AboutPage.tsx
import React from "react";
import Card from "@/components/common/Card";

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Rescue Connect</h1>
          <p className="text-xl text-primary-light">
            Connecting communities and agencies for faster, more effective
            disaster response.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card>
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Our Mission
          </h2>
          <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
            {/* Use Tailwind Typography plugin for nice text styling if installed: https://tailwindcss.com/docs/typography-plugin */}
            {/* Otherwise, style manually */}
            <p>
              Rescue Connect aims to be a vital, lifesaving application that
              integrates all rescue agencies onto a centralized platform,
              ensuring swift and effective disaster response. During natural or
              man-made disasters, the platform provides access to crucial
              contact information, facilitating coordination and optimized
              resource awareness.
            </p>
            <p>
              By streamlining access to emergency contacts, Rescue Connect
              promotes a more unified approach to emergencies, enhancing overall
              efficiency. We believe that rapid access to the right information
              can save lives.
            </p>
            <p>
              Our goal is to empower communities by granting immediate access to
              critical information, enabling faster responses. While we
              currently focus on providing contact information, future
              integrations may allow agencies to update status and resource
              availability directly (subject to collaboration and technical
              feasibility).
            </p>
            <p>
              We invite feedback and collaboration to improve this platform
              continually. Every step towards better information accessibility
              contributes to building community resilience and improving
              emergency response capabilities. Rescue Connect is committed to
              community safety and disaster preparedness.
            </p>
          </div>
        </Card>

        {/* Add more sections if needed, e.g., Team, Technology, Vision */}
      </div>
    </>
  );
};

export default AboutPage;
