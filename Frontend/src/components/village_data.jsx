import React from 'react';
import Card from './Card';
import villageData from '../../data/list.json';

const VillagesPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 mt-12 text-center">SOS Children's Villages</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {villageData.map((village) => (
          <Card key={village.id} village={village} />
        ))}
      </div>
    </div>
  );
};

export default VillagesPage;
