import React, { useState } from 'react';
import villagesData from '../../data/list.json'; // Assuming list.json is in the same directory

const Carbon_data = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedVillage, setSelectedVillage] = useState(null);
  const [solarPower, setSolarPower] = useState(0);
  const [biogas, setBiogas] = useState(0);
  const [vermiculture, setVermiculture] = useState(0);
  const [rainwaterHarvesting, setRainwaterHarvesting] = useState(0);
  const [floraAndFauna, setFloraAndFauna] = useState(0);
  const [wasteManagement, setWasteManagement] = useState(0);
  const [vegetableGarden, setVegetableGarden] = useState(0);
  const [treeCover, setTreeCover] = useState(0);
  const [totalReduction, setTotalReduction] = useState(0);

  // Function to handle village selection
  const handleSelectVillage = (location) => {
    const village = villagesData.find(village => village.location === location);
    if (village) {
      setSelectedLocation(location);
      setSelectedVillage(village);
    } else {
      setSelectedLocation('');
      setSelectedVillage(null);
    }
  };

  // Function to calculate total reduction
  const handleCalculate = () => {
    const reduction =
      solarPower * 2 +
      biogas * 1.5 +
      vermiculture * 1 +
      rainwaterHarvesting * 3 +
      floraAndFauna +
      wasteManagement +
      vegetableGarden +
      treeCover;
    setTotalReduction(reduction);
  };

  // Function to reset all fields
  const resetFields = () => {
    setSelectedLocation('');
    setSelectedVillage(null);
    setSolarPower(0);
    setBiogas(0);
    setVermiculture(0);
    setRainwaterHarvesting(0);
    setFloraAndFauna(0);
    setWasteManagement(0);
    setVegetableGarden(0);
    setTreeCover(0);
    setTotalReduction(0);
  };

  return (
    <div className='mt-12 max-w-screen-lg mx-auto px-4 py-8 bg-light-violet shadow-lg rounded-lg'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Carbon Footprint Reduction Calculator</h1>

      <div className='mb-6'>
        <div className='flex items-center'>
          <select
            className='select select-bordered mr-2 flex-grow bg-gray-800 text-white'
            value={selectedLocation}
            onChange={(e) => handleSelectVillage(e.target.value)}
          >
            <option value=''>Select Village Location</option>
            {villagesData.map((village, index) => (
              <option key={index} value={village.location}>{village.location}</option>
            ))}
          </select>
          <button className='btn btn-primary bg-blue-500 hover:bg-blue-600 text-white' onClick={handleSelectVillage}>
            Search
          </button>
        </div>
      </div>

      {selectedVillage && (
        <div className='mb-6'>
          <h2 className='text-xl font-bold mb-2'>Projects for Carbon Footprint Reduction ({selectedVillage.name})</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='label'>Solar Power (kWh)</label>
              <input
                type='number'
                className='input input-bordered bg-gray-700 text-white'
                value={solarPower}
                onChange={(e) => setSolarPower(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <label className='label'>Biogas (kg CO2)</label>
              <input
                type='number'
                className='input input-bordered bg-gray-700 text-white'
                value={biogas}
                onChange={(e) => setBiogas(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <label className='label'>Vermiculture (kg CO2)</label>
              <input
                type='number'
                className='input input-bordered bg-gray-700 text-white'
                value={vermiculture}
                onChange={(e) => setVermiculture(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <label className='label'>Rainwater Harvesting (kg CO2)</label>
              <input
                type='number'
                className='input input-bordered bg-gray-700 text-white'
                value={rainwaterHarvesting}
                onChange={(e) => setRainwaterHarvesting(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <label className='label'>Flora and Fauna (hectares or index)</label>
              <input
                type='number'
                className='input input-bordered bg-gray-700 text-white'
                value={floraAndFauna}
                onChange={(e) => setFloraAndFauna(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <label className='label'>Waste Management (kg or tonnes)</label>
              <input
                type='number'
                className='input input-bordered bg-gray-700 text-white'
                value={wasteManagement}
                onChange={(e) => setWasteManagement(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <label className='label'>Vegetable Garden (sqm or kg)</label>
              <input
                type='number'
                className='input input-bordered bg-gray-700 text-white'
                value={vegetableGarden}
                onChange={(e) => setVegetableGarden(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <label className='label'>Tree Cover (hectares or CO2e)</label>
              <input
                type='number'
                className='input input-bordered bg-gray-700 text-white'
                value={treeCover}
                onChange={(e) => setTreeCover(parseFloat(e.target.value))}
              />
            </div>
          </div>
        </div>
      )}

      <div className='mb-6 text-center'>
        <button className='btn btn-primary mr-4 bg-green-500 hover:bg-green-600 text-white' onClick={handleCalculate}>
          Calculate Reduction
        </button>
        <button className='btn btn-secondary bg-gray-500 hover:bg-gray-600 text-white' onClick={resetFields}>
          Reset
        </button>
      </div>

      {totalReduction > 0 && (
        <div className='bg-gray-800 p-4 rounded-md text-center'>
          <h2 className='text-xl font-bold mb-2 text-white'>Total Carbon Footprint Reduction</h2>
          <p className='text-lg text-white'>{totalReduction} kg CO2</p>
        </div>
      )}

      <div className='mt-8 bg-gray-800 p-4 rounded-md'>
        <h2 className='text-xl font-bold mb-4 text-white'>Calculation Formula</h2>
        <p className='text-white'>
          Total Reduction = (Solar Power * 2) + (Biogas * 1.5) + (Vermiculture * 1) + (Rainwater Harvesting * 3) + Flora and Fauna + Waste Management + Vegetable Garden + Tree Cover
        </p>
      </div>
    </div>
  );
};

export default Carbon_data;
