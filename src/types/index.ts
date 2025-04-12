// src/types/index.ts
export interface EmergencyContact {
  name: string;
  phone: string;
  description?: string;
  website?: string;
  email?: string;
}

export interface DistrictData {
  districtName: string;
  contacts: EmergencyContact[];
}

export interface StateData {
  stateName: string;
  isoCode: string; // e.g., "IN-TG" for Telangana
  stateLevel: EmergencyContact[];
  districts?: {
    [districtKey: string]: DistrictData; // Use a simple key or district name
  };
}

export interface EmergencyContactsData {
  national: EmergencyContact[];
  states: {
    [stateIsoCode: string]: StateData;
  };
}

// Type for Nominatim Reverse Geocoding Response (Simplified)
export interface NominatimAddress {
  road?: string;
  suburb?: string;
  city_district?: string; // Sometimes used for district/taluk
  county?: string; // Often holds the district name
  state_district?: string; // Can also hold district
  state?: string;
  postcode?: string;
  country?: string;
  country_code?: string; // e.g., "in"
  municipality?: string;
  city?: string;
  town?: string;
  village?: string;
}

export interface NominatimResponse {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  display_name: string;
  address: NominatimAddress;
  boundingbox: string[];
}

// Props for components (add as needed)
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  titleIcon?: React.ReactNode;
  footer?: React.ReactNode;
  actions?: React.ReactNode; // Area for buttons etc at the bottom
}
