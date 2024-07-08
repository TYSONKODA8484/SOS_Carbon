import React from 'react';
import Navbar from '../components/Navbar';
import VillagesPage from '../components/village_data';
import Footer from '../components/Footer';

function Villages() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <VillagesPage />
      </div>
      <Footer />
    </div>
  );
}

export default Villages;
