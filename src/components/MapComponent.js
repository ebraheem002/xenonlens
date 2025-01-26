import React from 'react';
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';


const MapComponent = () => {
  const customIcon = new L.Icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  const center = [36.37927765826718, 43.16170975345384]; // Default map center (latitude, longitude)
  const locations = [
    { name: ' بغداد للبصريات',  position: [36.38503391729124, 43.18026942247493] }, 
    {name :'الجامعة للبصريات', position:[36.372348033645636, 43.14090080762535]},
    {name :' مركز الحدباء التخصصي', position:[36.37168552297464, 43.18244326138265]},
    {name :'الريان للبصريات', position:[36.37994885076487, 43.18043508279905]},
    {name :'زيد للبصريات', position:[36.383634119467224, 43.18024538465434]},
    {name :'اليمامة للبصريات', position:[36.373484923244966, 43.17590794640931]},
    {name :'ابن الهيثم للبصريات', position:[36.372898498166855, 43.17987737116287]}


  ];
  return (
    <MapContainer center={center} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((loc, idx) => (
        <Marker key={idx} position={loc.position} icon={customIcon }>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
