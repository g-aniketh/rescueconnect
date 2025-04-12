// src/pages/EmergencyPage.tsx
import React, { useState, useEffect } from "react";
import useGeolocation from "@/hooks/useGeolocation";
import {
  EmergencyContact,
  NominatimResponse,
  EmergencyContactsData,
  StateData,
  DistrictData,
} from "@/types";
import emergencyContactsData from "@/data/emergencyContacts.json"; // Import the static data
import EmergencyContactCard from "@/components/specific/EmergencyContactCard";
import {
  FiAlertTriangle,
  FiCompass,
  FiLoader,
  FiXCircle,
  FiDatabase,
} from "react-icons/fi"; // Icons
import { stateCodeMapping } from "@/utils/stateCodes";

// --- Helper Function to find state/district ---
// NOTE: This is a basic example. Nominatim response structure can vary.
// You might need more robust parsing based on address components.
const findLocationDetails = (
  address: NominatimResponse["address"] | null
): { stateCode: string | null; districtName: string | null } => {
  if (!address) return { stateCode: null, districtName: null };

  const stateName = address.state;
  const districtName =
    address.county ||
    address.state_district ||
    address.city_district ||
    address.municipality ||
    address.city ||
    address.town; // Try various fields for district
  const countryCode = address.country_code;

  if (countryCode !== "in") return { stateCode: null, districtName: null }; // Only process for India

  const stateCode = stateName
    ? stateCodeMapping[stateName.toLowerCase()] || null
    : null;

  console.log("Reverse Geocode Result:", address);
  console.log("Extracted:", { stateName, districtName, stateCode });

  return { stateCode, districtName: districtName?.toLowerCase() || null };
};

// --- Component ---
const EmergencyPage: React.FC = () => {
  const {
    latitude,
    longitude,
    error: geoError,
    loading: geoLoading,
  } = useGeolocation({
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000,
  });
  const [localContacts, setLocalContacts] = useState<EmergencyContact[]>([]);
  const [stateInfo, setStateInfo] = useState<StateData | null>(null);
  const [districtInfo, setDistrictInfo] = useState<DistrictData | null>(null);
  const [locationStatus, setLocationStatus] = useState<
    | "idle"
    | "locating"
    | "geocoding"
    | "searching"
    | "found"
    | "not_found"
    | "error"
  >("idle");
  const [geocodeError, setGeocodeError] = useState<string | null>(null);
  const [manualState, setManualState] = useState<string>(""); // For manual selection fallback

  const contacts: EmergencyContactsData =
    emergencyContactsData as EmergencyContactsData; // Cast data

  useEffect(() => {
    if (geoLoading) {
      setLocationStatus("locating");
      return;
    }
    if (geoError) {
      console.error("Geolocation Error:", geoError);
      setLocationStatus("error");
      // Consider allowing manual state selection here
      return;
    }

    if (
      latitude &&
      longitude &&
      locationStatus !== "found" &&
      locationStatus !== "not_found" &&
      locationStatus !== "geocoding"
    ) {
      setLocationStatus("geocoding");
      setGeocodeError(null); // Reset geocode error
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&accept-language=en`
      )
        .then(response => {
          if (!response.ok) {
            throw new Error(`Nominatim request failed: ${response.statusText}`);
          }
          return response.json() as Promise<NominatimResponse>;
        })
        .then(data => {
          const { stateCode, districtName } = findLocationDetails(data.address);
          setLocationStatus("searching");

          let foundState: StateData | null = null;
          let foundDistrict: DistrictData | null = null;
          let contactsToShow: EmergencyContact[] = [];

          if (stateCode && contacts.states[stateCode]) {
            foundState = contacts.states[stateCode];
            contactsToShow = [...foundState.stateLevel]; // Start with state level contacts

            if (districtName && foundState.districts) {
              // Attempt to find district match (case-insensitive partial match might be needed)
              const districtKey = Object.keys(foundState.districts).find(
                key =>
                  key.toLowerCase() === districtName ||
                  foundState!.districts![key].districtName.toLowerCase() ===
                    districtName
              );
              if (districtKey && foundState.districts[districtKey]) {
                foundDistrict = foundState.districts[districtKey];
                contactsToShow = [...contactsToShow, ...foundDistrict.contacts];
              }
            }
          }

          if (contactsToShow.length > 0) {
            setLocalContacts(contactsToShow);
            setLocationStatus("found");
            setStateInfo(foundState);
            setDistrictInfo(foundDistrict);
          } else {
            setLocationStatus("not_found");
            setStateInfo(foundState); // Still show state name if found
          }
        })
        .catch(err => {
          console.error("Reverse Geocoding Error:", err);
          setLocationStatus("error");
          setGeocodeError(
            err instanceof Error
              ? err.message
              : "Failed to fetch location details."
          );
          // Allow manual selection maybe
        });
    }
  }, [latitude, longitude, geoError, geoLoading, locationStatus, contacts]); // Add contacts to dependency array? Be careful with object references.

  // Handle Manual State Selection Change
  const handleManualStateChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedStateCode = event.target.value;
    setManualState(selectedStateCode);
    setLocationStatus("searching"); // Reset status
    setLocalContacts([]);
    setStateInfo(null);
    setDistrictInfo(null);

    if (selectedStateCode && contacts.states[selectedStateCode]) {
      const stateData = contacts.states[selectedStateCode];
      setStateInfo(stateData);
      setLocalContacts([...stateData.stateLevel]); // Show state level contacts
      setLocationStatus("found"); // Simplified status for manual
    } else {
      setLocationStatus("idle"); // Or 'not_found'
    }
  };

  const renderStatusMessage = () => {
    switch (locationStatus) {
      case "locating":
        return (
          <div className="flex items-center text-text-secondary">
            <FiLoader className="animate-spin mr-2" /> Getting your location...
            (Please allow permission)
          </div>
        );
      case "geocoding":
        return (
          <div className="flex items-center text-text-secondary">
            <FiCompass className="animate-pulse mr-2" /> Determining
            state/district...
          </div>
        );
      case "searching":
        return (
          <div className="flex items-center text-text-secondary">
            <FiDatabase className="animate-ping mr-2" /> Searching local
            contacts...
          </div>
        );
      case "found":
        let locMsg = `Showing contacts for ${
          stateInfo?.stateName || "your area"
        }`;
        if (districtInfo) locMsg += `, ${districtInfo.districtName} District`;
        return (
          <div className="text-lg font-semibold text-accent-green">
            {locMsg}.
          </div>
        );
      case "not_found":
        let notFoundMsg =
          "Could not find specific district contacts. Showing State-level contacts";
        if (stateInfo) notFoundMsg += ` for ${stateInfo.stateName}.`;
        else
          notFoundMsg =
            "Could not determine specific location. Showing National contacts.";
        return (
          <div className="text-lg font-semibold text-accent-yellow">
            {notFoundMsg}
          </div>
        );
      case "error":
        let errorMsg = "Could not automatically determine location.";
        if (geoError) errorMsg += ` Reason: ${geoError.message}. `;
        if (geocodeError) errorMsg += ` Details: ${geocodeError}. `;
        errorMsg += "Please check permissions or select your state manually.";
        return (
          <div className="text-lg font-semibold text-accent-red flex items-center">
            <FiXCircle className="mr-2" /> {errorMsg}
          </div>
        );
      default:
        return (
          <div className="text-text-secondary">
            Attempting to find local emergency contacts...
          </div>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-accent-red flex items-center justify-center mb-2">
          <FiAlertTriangle className="mr-3" /> Emergency Contacts
        </h1>
        <p className="text-xl text-text-secondary">
          Stay calm. Find the help you need quickly. National helplines are
          always available.
        </p>
      </div>

      {/* Location Status */}
      <div className="mb-8 p-4 bg-background-paper rounded-lg shadow-sm text-center">
        {renderStatusMessage()}
      </div>

      {/* Manual State Selection (Show on error or if location not found) */}
      {(locationStatus === "error" ||
        locationStatus === "not_found" ||
        locationStatus === "idle") && (
        <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <label
            htmlFor="manualStateSelect"
            className="block text-sm font-medium text-yellow-800 mb-2"
          >
            Or, select your State/UT manually:
          </label>
          <select
            id="manualStateSelect"
            value={manualState}
            onChange={handleManualStateChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-yellow-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md bg-white"
          >
            <option value="">-- Select State --</option>
            {Object.values(contacts.states)
              .sort((a, b) => a.stateName.localeCompare(b.stateName))
              .map(state => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.stateName}
                </option>
              ))}
          </select>
        </div>
      )}

      {/* Contacts Grid */}
      <div className="space-y-8">
        {/* Local/State/District Contacts (if found) */}
        {(locationStatus === "found" ||
          locationStatus === "searching" ||
          locationStatus === "not_found" ||
          manualState) &&
          localContacts.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-6">
                {districtInfo ? `${districtInfo.districtName} District & ` : ""}
                {stateInfo
                  ? `${stateInfo.stateName} State Level`
                  : "Local"}{" "}
                Contacts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {localContacts.map((contact, index) => (
                  <EmergencyContactCard
                    key={`${contact.phone}-${index}`}
                    contact={contact}
                  />
                ))}
              </div>
            </div>
          )}

        {/* National Contacts (Always Show) */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6 border-t border-secondary-light pt-8 mt-8">
            National Helplines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.national.map((contact, index) => (
              <EmergencyContactCard
                key={`nat-${contact.phone}-${index}`}
                contact={contact}
              />
            ))}
          </div>
        </div>

        {/* Specific Hardcoded Contacts from original emergency.html (Add if needed) */}
        {/* You might want to integrate these into the JSON structure instead */}
        {/* <div className="border-t border-secondary-light pt-8 mt-8">
                  <h2 className="text-2xl font-semibold text-primary mb-6">Other Important Contacts</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                       <EmergencyContactCard contact={{ name: "Air Ambulance (Example)", phone: "+91 8712289614", description:"Call air ambulance in case of medical emergency." }}/>
                   </div>
             </div> */}
      </div>
    </div>
  );
};

export default EmergencyPage;
