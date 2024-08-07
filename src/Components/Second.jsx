import React from "react";
import { Link } from "react-router-dom";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const damIcon = L.icon({
  iconUrl:
    "https://png.pngtree.com/png-clipart/20210127/ourmid/pngtree-cartoon-river-dam-clipart-png-image_2846084.jpg",
  iconSize: [25, 41],
});

const Second = () => {
  const home_url = "http://localhost:3000/";

  return (
    <>
      <Link to={home_url} class="inline-flex text-black bg-primary-600">
        Back to Homepage
      </Link>

      <h1>Second Component</h1>
      <h3>Map System</h3>
      <div style={{ border: "2px solid black", padding: "4px" }}>
        <MapContainer
          style={{ width: "100%", height: "400px" }}
          center={[27.181454, 89.531226]}
          zoom={10}
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          />
          <Marker position={[27.110354, 89.531226]} icon={damIcon}>
            <Popup>chhukha dam</Popup>
          </Marker>
          <Marker position={[27.251454, 89.621226]}>
            <Popup>Catchment 1</Popup>
          </Marker>
          <Marker position={[27.251454, 89.445226]}>
            <Popup>Catchment 2</Popup>
          </Marker>
          <Marker position={[27.355454, 89.641226]}>
            <Popup>Catchment 3</Popup>
          </Marker>
          <Marker position={[27.321454, 89.341226]}>
            <Popup>Catchment 4 </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Second;
