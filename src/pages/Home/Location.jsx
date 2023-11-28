import React from 'react';
import MapComponent from './GoogleMapp';

const Location = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <h2 className="text-2xl text-center font-lato font-extrabold mt-16 mb-10">
        Address Our Building
      </h2>
      <p className="font-lato text-gray-500 text-sm md:text-lg">
        Developer Building
      </p>
      <p className="font-lato text-gray-500 text-sm md:text-lg">
        Gulsan-1,Road71,Dhaka
      </p>
      <p className="font-lato text-gray-500 text-sm md:text-lg">
        Phone:0170000000
      </p>
      <p className="font-lato text-gray-500 text-sm md:text-lg">
        Mail:rashadul@gmail.com
      </p>

      <MapComponent />
    </div>
  );
};

export default Location;
