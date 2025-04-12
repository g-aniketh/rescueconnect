// src/hooks/useGeolocation.ts
import { useState, useEffect } from "react";

interface GeolocationState {
  loading: boolean;
  latitude: number | null;
  longitude: number | null;
  error: GeolocationPositionError | Error | null;
  timestamp: number | null;
}

const useGeolocation = (options?: PositionOptions): GeolocationState => {
  const [state, setState] = useState<GeolocationState>({
    loading: true,
    latitude: null,
    longitude: null,
    error: null,
    timestamp: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState(s => ({
        ...s,
        loading: false,
        error: new Error("Geolocation is not supported by your browser."),
      }));
      return;
    }

    const handleSuccess = (position: GeolocationPosition) => {
      setState({
        loading: false,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timestamp: position.timestamp,
        error: null,
      });
    };

    const handleError = (error: GeolocationPositionError) => {
      setState(s => ({
        ...s,
        loading: false,
        error: error,
      }));
    };

    setState(s => ({ ...s, loading: true, error: null })); // Reset loading state on options change
    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      options
    );

    // Optional: Watch position if needed, requires cleanup
    // const watchId = navigator.geolocation.watchPosition(handleSuccess, handleError, options);
    // return () => navigator.geolocation.clearWatch(watchId);
  }, [options]); // Re-run effect if options change

  return state;
};

export default useGeolocation;
