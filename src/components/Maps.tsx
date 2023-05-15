import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";



const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

export default function Maps() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDxkicO4NCjOfD4IdUAmP2CObZ2d0QXnks"
    // Load additional libraries here if needed
  });

  if (loadError) return <div>Error loading maps</div>;

  if (!isLoaded) return <div>Loading maps...</div>;

  return <Mapy />;
}

const Mapy = () => {
  const mapContainerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const options = useMemo(() => ({ zoom: 10, center }), []);

  return <GoogleMap mapContainerStyle={mapContainerStyle} options={options}></GoogleMap>;
};

