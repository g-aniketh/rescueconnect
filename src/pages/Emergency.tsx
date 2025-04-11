import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const Emergency = () => {
  return (
    <div>
      <section className="py-12 bg-emergency-50">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-emergency-700 mb-8">
            Emergency Right Now
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-emergency-600">
              <div className="flex items-center mb-4">
                <img
                  src="/src/assets/images/police.svg"
                  alt="NDRF"
                  className="w-16 h-16 mr-4"
                />
                <h3 className="text-2xl font-semibold text-neutral-800">
                  NDRF
                </h3>
              </div>
              <p className="text-neutral-700 mb-6">
                Call the NDRF service in case of calamities
              </p>
              <div>
                <a href="tel:+919870001118">
                  <Button variant="emergency" className="text-lg px-6 py-3">
                    Call Now
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="border-l-4 border-l-emergency-600">
              <div className="flex items-center mb-4">
                <img
                  src="/src/assets/images/doctor.svg"
                  alt="Air Ambulance"
                  className="w-16 h-16 mr-4"
                />
                <h3 className="text-2xl font-semibold text-neutral-800">
                  Air Ambulance
                </h3>
              </div>
              <p className="text-neutral-700 mb-6">
                Call air ambulance in case of medical emergency.
              </p>
              <div>
                <a href="tel:+918712289614">
                  <Button variant="emergency" className="text-lg px-6 py-3">
                    Call Now
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-6">Local Emergency Contacts</h2>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Find emergency contacts near you
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="location"
                  placeholder="Enter your location"
                  className="flex-1 rounded-l-md border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <button className="bg-primary-600 text-white px-4 py-2 rounded-r-md hover:bg-primary-700">
                  Search
                </button>
              </div>
            </div>
            <p className="text-sm text-neutral-500">
              Or allow location access to find contacts automatically
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-lg font-semibold mb-2">Police</h3>
              <p className="text-neutral-600 mb-4">Emergency: 100</p>
              <p className="text-neutral-600 mb-1">
                Local Station: +91 9876543210
              </p>
              <p className="text-neutral-600">
                Address: Police Station, Main Road
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold mb-2">Ambulance</h3>
              <p className="text-neutral-600 mb-4">Emergency: 108</p>
              <p className="text-neutral-600 mb-1">
                Local Service: +91 9876543211
              </p>
              <p className="text-neutral-600">
                Address: City Hospital, Hospital Road
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold mb-2">Fire Department</h3>
              <p className="text-neutral-600 mb-4">Emergency: 101</p>
              <p className="text-neutral-600 mb-1">
                Local Station: +91 9876543212
              </p>
              <p className="text-neutral-600">
                Address: Fire Station, Station Road
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency;
