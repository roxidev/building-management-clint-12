import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from 'react-geocode';

const MapComponent = ({ google }) => {
  const [location, setLocation] = useState({ lat: 23.8041, lng: 90.4152 });
  const address = '1600 Amphitheatre Parkway, Mountain View, CA';

  //   useEffect(() => {
  //     Geocode.fromAddress(address).then(
  //       (response) => {
  //         const { lat, lng } = response.results[0].geometry.location;
  //         setLocation({ lat, lng });
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }, []);

  return (
    <Map
      google={google}
      zoom={14}
      style={{ width: '100%', height: '50%' }}
      initialCenter={{ lat: location.lat, lng: location.lng }}
    >
      <Marker position={{ lat: location.lat, lng: location.lng }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: null, // No API key for test purposes (not suitable for production)
})(MapComponent);
