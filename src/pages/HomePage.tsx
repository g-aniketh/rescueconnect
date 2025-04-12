// src/pages/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import { FiLifeBuoy, FiMapPin, FiAlertTriangle } from "react-icons/fi"; // Example icons

// Import your images - adjust paths as needed
import indiaFlagImg from "@/assets/india.png"; // Example - place images in assets
import telanganaFlagImg from "@/assets/telangana.png"; // Example

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-light/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-extrabold text-primary sm:text-5xl md:text-6xl mb-4">
            Rescue Connect
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-text-secondary sm:text-xl md:mt-5 md:max-w-3xl">
            Your centralized platform connecting you to vital rescue agencies
            during emergencies.
          </p>
          <p className="mt-2 text-2xl font-semibold text-accent-red animate-pulse">
            Rescue. Recover. Reunite.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link to="/emergency">
              <Button variant="danger" size="lg" iconLeft={<FiAlertTriangle />}>
                Emergency Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="primary" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature/Info Section (Example) */}
      <section className="py-16 bg-background-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            How We Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-6">
              <div className="bg-primary/10 rounded-full p-4 mb-4 inline-block">
                <FiLifeBuoy className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                National & State Contacts
              </h3>
              <p className="text-text-secondary">
                Access curated lists of essential national and state-level
                emergency services.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center p-6">
              <div className="bg-primary/10 rounded-full p-4 mb-4 inline-block">
                <FiMapPin className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Location-Aware Help*
              </h3>
              <p className="text-text-secondary">
                Find relevant state and district contacts based on your
                approximate location (requires permission).
                <span className="text-xs block mt-1">
                  (*Accuracy depends on data availability)
                </span>
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center p-6">
              <div className="bg-primary/10 rounded-full p-4 mb-4 inline-block">
                <FiAlertTriangle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">One-Stop Platform</h3>
              <p className="text-text-secondary">
                A single, reliable source for critical contact information
                during disasters and emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Levels Section (Similar to your "Two tokens" section) */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Available Service Levels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={indiaFlagImg}
                  alt="India Flag"
                  className="h-10 w-auto mr-3 rounded"
                />
                <h3 className="text-xl font-semibold">
                  National Level Agencies
                </h3>
              </div>
              <p className="text-text-secondary mb-4">
                Access nationwide disaster response services like NDRF and
                central helplines.
              </p>
              {/* Example contacts - Replace with actual lookup later */}
              <div className="space-y-1 text-sm">
                <p>
                  <strong>National Emergency:</strong> 112
                </p>
                <p>
                  <strong>NDRF:</strong> 9711077372
                </p>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <Link to="/emergency?level=national">
                  <Button variant="primary" size="sm">
                    View National
                  </Button>
                </Link>
                {/* <Button variant="secondary" size="sm">Read More</Button> */}
              </div>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={telanganaFlagImg}
                  alt="State Flag Example"
                  className="h-10 w-auto mr-3 rounded"
                />{" "}
                {/* Use a generic state icon or specific state image */}
                <h3 className="text-xl font-semibold">
                  State & District Level
                </h3>
              </div>
              <p className="text-text-secondary mb-4">
                Find contact information for State Disaster Management
                Authorities (SDMA) and District Control Rooms based on location.
              </p>
              {/* Example contacts */}
              <div className="space-y-1 text-sm">
                <p>
                  <strong>Medical (e.g., Telangana):</strong> 108
                </p>
                <p>
                  <strong>SDMA (State Specific):</strong> Varies
                </p>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <Link to="/emergency">
                  <Button variant="primary" size="sm">
                    Find Local Contacts
                  </Button>
                </Link>
                {/* <Button variant="secondary" size="sm">Read More</Button> */}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
