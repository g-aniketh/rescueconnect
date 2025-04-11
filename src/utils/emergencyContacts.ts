interface EmergencyContact {
  id: string;
  name: string;
  type: "police" | "ambulance" | "fire" | "ndrf" | "other";
  phone: string;
  address?: string;
  distance?: number; // in km
}

// This would normally come from an API based on coordinates
export const getLocalEmergencyContacts = (
  latitude: number | null,
  longitude: number | null
): EmergencyContact[] => {
  // Mock data - in a real app, this would be fetched from a backend API
  const contacts: EmergencyContact[] = [
    {
      id: "1",
      name: "City Police Station",
      type: "police",
      phone: "+91 9876543210",
      address: "123 Main Street, City Center",
      distance: 2.3,
    },
    {
      id: "2",
      name: "District Hospital Ambulance",
      type: "ambulance",
      phone: "+91 9876543211",
      address: "456 Hospital Road, Medical District",
      distance: 3.1,
    },
    {
      id: "3",
      name: "Central Fire Station",
      type: "fire",
      phone: "+91 9876543212",
      address: "789 Fire Brigade Lane, Downtown",
      distance: 4.5,
    },
    {
      id: "4",
      name: "NDRF Team Alpha",
      type: "ndrf",
      phone: "+91 9876543213",
      address: "101 Rescue Boulevard, Outskirts",
      distance: 7.8,
    },
    {
      id: "5",
      name: "Community Emergency Response Team",
      type: "other",
      phone: "+91 9876543214",
      address: "202 Volunteer Street, Suburb Area",
      distance: 1.5,
    },
  ];

  // Sort by distance if coordinates are provided
  if (latitude && longitude) {
    return [...contacts].sort((a, b) => (a.distance || 0) - (b.distance || 0));
  }

  return contacts;
};
