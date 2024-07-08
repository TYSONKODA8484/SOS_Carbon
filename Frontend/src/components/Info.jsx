import React, { useState, useEffect } from 'react';
import villagesData from '../../data/list.json'; // Adjust the path to your list.json file

const Info = () => {
  const [villages, setVillages] = useState([]);
  const [newVillage, setNewVillage] = useState({
    id: '',
    location: '',
    name: '',
    latitude: '',
    longitude: '',
    solar: '',
    biogas: '',
    vermiculture: '',
    structureStability: '',
    description: '',
    address: ''
  });

  useEffect(() => {
    setVillages(villagesData);
  }, []);

  const handleInputChange = (e, village, field) => {
    const updatedVillages = villages.map((v) =>
      v.id === village.id ? { ...v, [field]: e.target.value } : v
    );
    setVillages(updatedVillages);
  };

  const handleNewVillageChange = (e, field) => {
    setNewVillage({ ...newVillage, [field]: e.target.value });
  };

  const handleAddVillage = () => {
    const updatedVillages = [...villages, { ...newVillage, id: villages.length + 1 }];
    setVillages(updatedVillages);
    setNewVillage({
      id: '',
      location: '',
      name: '',
      latitude: '',
      longitude: '',
      solar: '',
      biogas: '',
      vermiculture: '',
      structureStability: '',
      description: '',
      address: ''
    });
  };

  const handleDeleteVillage = (id) => {
    const updatedVillages = villages.filter((v) => v.id !== id);
    setVillages(updatedVillages);
  };

  const saveChanges = () => {
    // Here you can implement saving changes to a backend or localStorage
    console.log("Saving changes:", villages);
    // For demonstration, you can save to localStorage
    localStorage.setItem('villagesData', JSON.stringify(villages));
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
      <div className='mt-12'>
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Latitude</th>
                <th className="px-4 py-2">Longitude</th>
                <th className="px-4 py-2">Solar</th>
                <th className="px-4 py-2">Biogas</th>
                <th className="px-4 py-2">Vermiculture</th>
                <th className="px-4 py-2">Structure Stability</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {villages.map((village) => (
                <tr key={village.id}>
                  <td className="border px-4 py-2">{village.id}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={village.location}
                      onChange={(e) => handleInputChange(e, village, 'location')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={village.name}
                      onChange={(e) => handleInputChange(e, village, 'name')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={village.latitude}
                      onChange={(e) => handleInputChange(e, village, 'latitude')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={village.longitude}
                      onChange={(e) => handleInputChange(e, village, 'longitude')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={village.solar}
                      onChange={(e) => handleInputChange(e, village, 'solar')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={village.biogas}
                      onChange={(e) => handleInputChange(e, village, 'biogas')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={village.vermiculture}
                      onChange={(e) => handleInputChange(e, village, 'vermiculture')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={village.structureStability}
                      onChange={(e) => handleInputChange(e, village, 'structureStability')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={village.description}
                      onChange={(e) => handleInputChange(e, village, 'description')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={village.address}
                      onChange={(e) => handleInputChange(e, village, 'address')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <button className="btn btn-ghost btn-xs" onClick={() => handleDeleteVillage(village.id)}>Delete</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border px-4 py-2"></td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={newVillage.location}
                    onChange={(e) => handleNewVillageChange(e, 'location')}
                    placeholder="Location"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={newVillage.name}
                    onChange={(e) => handleNewVillageChange(e, 'name')}
                    placeholder="Name"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={newVillage.latitude}
                    onChange={(e) => handleNewVillageChange(e, 'latitude')}
                    placeholder="Latitude"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={newVillage.longitude}
                    onChange={(e) => handleNewVillageChange(e, 'longitude')}
                    placeholder="Longitude"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={newVillage.solar}
                    onChange={(e) => handleNewVillageChange(e, 'solar')}
                    placeholder="Solar"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={newVillage.biogas}
                    onChange={(e) => handleNewVillageChange(e, 'biogas')}
                    placeholder="Biogas"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={newVillage.vermiculture}
                    onChange={(e) => handleNewVillageChange(e, 'vermiculture')}
                    placeholder="Vermiculture"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={newVillage.structureStability}
                    onChange={(e) => handleNewVillageChange(e, 'structureStability')}
                    placeholder="Structure Stability"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={newVillage.description}
                    onChange={(e) => handleNewVillageChange(e, 'description')}
                    placeholder="Description"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={newVillage.address}
                    onChange={(e) => handleNewVillageChange(e, 'address')}
                    placeholder="Address"
                  />
                </td>
                <td className="border px-4 py-2">
                  <button className="btn btn-ghost btn-xs" onClick={handleAddVillage}>Add</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-12 ml-4 ml-auto">
        <button className="btn btn-primary" onClick={saveChanges}>Save Changes</button>
      </div>
    </div>
  );
};

export default Info;
