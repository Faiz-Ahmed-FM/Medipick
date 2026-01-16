import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

export default function Map({ pharmacies }) {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_KEY">
      <GoogleMap
        zoom={13}
        center={pharmacies[0]}
        mapContainerStyle={{ height: "400px" }}
      >
        {pharmacies.map((p, i) =>
          <Marker key={i} position={p} />
        )}
      </GoogleMap>
    </LoadScript>
  );
}
