import React from 'react';

const Card = ({ id, name, username, email }) => {
  return (
    <div className='bg-green-300 border border-gray-200 p-4 text-center w-64'>
      <img src={`https://robohash.org/${id}?200x200`} alt="roboimage" className="mx-auto mb-4"/>
      <div>
        <h1 className="text-xl font-semibold">{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
