import { Link } from "react-router-dom";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Centralized Platform for Rescue Agencies
            </h1>
            <p className="text-xl text-neutral-700 mb-8">
              Rescue. Recover. Reunite.
            </p>
            <Button variant="primary" className="text-lg px-6 py-3">
              Get Contacts
            </Button>
          </div>
        </div>
      </section>

      <div className="border-t border-neutral-200"></div>

      {/* Services Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Emergency Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <img
                  src="/src/assets/images/india.png"
                  alt="National Level"
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-xl font-semibold">National Level</h3>
              </div>
              <p className="text-neutral-700 mb-4">
                National Disaster Services
              </p>
              <p className="text-neutral-600 mb-6">
                Emergency Contact Number: +91-9711077372
                <br />
                Email: headquarters@ndrf.gov.in
              </p>
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <Button variant="secondary">Choose</Button>
                <Button variant="outline">Read more</Button>
              </div>
            </Card>

            <Card className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <img
                  src="/src/assets/images/telangana.png"
                  alt="State Level"
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-xl font-semibold">State Level</h3>
              </div>
              <p className="text-neutral-700 mb-4">State Disaster Services</p>
              <p className="text-neutral-600 mb-6">
                Email: airambulance@emergencyservices.in
                <br />
                Website: Air Ambulance Services
              </p>
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <Button variant="secondary">Choose</Button>
                <Button variant="outline">Read more</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
