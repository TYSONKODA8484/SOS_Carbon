import React, { useState } from 'react';

const Carbon_data = () => {
  const [villageName, setVillageName] = useState('');
  const [solarPower, setSolarPower] = useState(0);
  const [biogasCarbon, setBiogasCarbon] = useState(0);
  const [vermicultureCarbon, setVermicultureCarbon] = useState(0);
  const [waterHarvestingCarbon, setWaterHarvestingCarbon] = useState(0);
  const [totalReduction, setTotalReduction] = useState(0);

  const handleCalculate = () => {
    // Calculate total reduction based on inputs
    const reduction = solarPower * 2 + biogasCarbon * 1.5 + vermicultureCarbon * 1 + waterHarvestingCarbon * 3;
    setTotalReduction(reduction);
  };

  return (
    <div className='mt-12 max-w-screen-lg mx-auto px-4 py-8 bg-light-violet shadow-lg rounded-lg'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Carbon Footprint Reduction Calculator</h1>

      <div className='mb-6'>
        <div className='flex items-center'>
          <input
            type='text'
            className='input input-bordered mr-2 flex-grow'
            placeholder='Enter Village Name'
            value={villageName}
            onChange={(e) => setVillageName(e.target.value)}
          />
          <button className='btn btn-primary'>Search</button>
        </div>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl font-bold mb-2'>Projects for Carbon Footprint Reduction</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='label'>Solar Power (kWh)</label>
            <input
              type='number'
              className='input input-bordered'
              value={solarPower}
              onChange={(e) => setSolarPower(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label className='label'>Biogas Carbon Footprint (kg CO2)</label>
            <input
              type='number'
              className='input input-bordered'
              value={biogasCarbon}
              onChange={(e) => setBiogasCarbon(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label className='label'>Vermiculture Carbon Footprint (kg CO2)</label>
            <input
              type='number'
              className='input input-bordered'
              value={vermicultureCarbon}
              onChange={(e) => setVermicultureCarbon(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label className='label'>Water Harvesting Carbon Footprint (kg CO2)</label>
            <input
              type='number'
              className='input input-bordered'
              value={waterHarvestingCarbon}
              onChange={(e) => setWaterHarvestingCarbon(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div>

      <div className='mb-6 text-center'>
        <button className='btn btn-primary' onClick={handleCalculate}>
          Calculate Reduction
        </button>
      </div>

      {totalReduction > 0 && (
        <div className='bg-gray-200 p-4 rounded-md text-center'>
          <h2 className='text-xl font-bold mb-2 text-black'>Total Carbon Footprint Reduction</h2>
          <p className='text-lg text-gray-800'>{totalReduction} kg CO2</p>
        </div>
      )}
    </div>
  );
};

export default Carbon_data;
