import React from 'react';
import room1 from '../../assets/image/card.jpg';
const Room = () => {
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={room1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <p className="">Floor no:06</p>
          <p className="">Block name:13/2</p>
          <p className="">Apartment no:187</p>
          <p className="">Rent</p>
          <div className="card-actions">
            <button className="btn bg-blue-500 text-white">Agreement</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
