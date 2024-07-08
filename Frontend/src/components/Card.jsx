import React, { useState } from 'react';

const Card = ({ village }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card bg-white w-96 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <figure className="overflow-hidden">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Village"
          className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-xl font-bold mb-2">{village.name}</h2>
        {!expanded && (
          <p className="text-gray-600">{`${village.description.substring(0, 100)}...`}</p>
        )}
        {expanded && (
          <div className="mb-4">
            <p className="text-gray-600">{village.description}</p>
          </div>
        )}
        <div className="card-actions justify-end mt-4">
          <div className="badge bg-blue-200 text-blue-800 mr-2">Solar: {village.solar}</div>
          <div className="badge bg-green-200 text-green-800 mr-2">Biogas: {village.biogas}</div>
          <div className="badge bg-yellow-200 text-yellow-800 mr-2">Vermiculture: {village.Vermiculture}</div>
          <div className="badge bg-purple-200 text-purple-800 mr-2">Structure Stability: {village["Structure Stability"]}</div>
        </div>
        <button
          className="btn btn-secondary mt-4"
          onClick={toggleExpand}
        >
          {expanded ? 'Collapse' : 'Expand'}
        </button>
      </div>
      {expanded && (
        <div className="card-footer p-4 bg-gray-100">
          <p className="text-gray-600"><strong>Address:</strong> {village.address}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
