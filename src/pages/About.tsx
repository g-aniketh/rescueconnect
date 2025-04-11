import Button from "../components/ui/Button";

const About = () => {
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

      {/* About Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">More About Us</h2>
          <div className="space-y-6 text-neutral-700 max-w-4xl">
            <p className="text-lg">
              Rescue-Connect is a vital lifesaving application that integrates
              all rescue agencies onto a centralized platform, ensuring swift
              and effective disaster response. During natural or man-made
              disasters, the app displays real-time locations of registered
              relief agencies, facilitating seamless coordination and optimized
              resource allocation. By streamlining communication channels,
              Rescue-Connect promotes a unified approach to emergencies,
              enhancing overall efficiency.
            </p>
            <p className="text-lg">
              Agencies using Rescue-Connect can promptly update their status,
              available resources, and specific needs, fostering collaboration
              and informed decision-making during crises. Its intuitive and
              user-friendly interface empowers communities by granting immediate
              access to critical information, enabling faster responses and
              potentially saving lives.
            </p>
            <p className="text-lg">
              Rescue-Connect invites stakeholders to join its platform,
              emphasizing its role in creating a safer, more connected world in
              times of distress. Each interaction on Rescue-Connect contributes
              to building resilience and improving emergency response
              capabilities, exemplifying its commitment to community safety and
              disaster preparedness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
