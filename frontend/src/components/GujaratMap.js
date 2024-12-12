import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Sample data for innovation clusters
const innovationClusters = [
    { name: 'Ahmedabad Cluster', position: [23.0225, 72.5714], resources: 'High' },
    { name: 'Surat Cluster', position: [21.1702, 72.8311], resources: 'Medium' },
    { name: 'Vadodara Cluster', position: [22.3072, 73.1812], resources: 'Low' }
];

const GujaratMap = () => {
    return (
        <MapContainer center={[22.2587, 71.1924]} zoom={7} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {innovationClusters.map((cluster, index) => (
                <Marker key={index} position={cluster.position}>
                    <Popup>
                        <strong>{cluster.name}</strong><br />
                        Resource Usage: {cluster.resources}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default GujaratMap;
