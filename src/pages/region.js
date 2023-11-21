import React, { useState, useEffect } from 'react';
import "../css/region.css"
import LandingPageModal from '../modals/landingpage-modal';
import { IoLayers } from 'react-icons/io5';
import { Card } from '@mui/material';
function Region() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div >
       <style>{`
        body {
          background-color: rgba(0, 0, 0, 0.6);
          margin: 0;
          padding: 0;
        }
      `}</style>
      <div>
      <div className='region-page-header'><span style={{ borderBottom: "2px solid white", display: 'inline-block', fontFamily: "Poppins", color: "white" }}>REGIONS</span></div>
      </div>
      <div onClick={() => setIsModalOpen(!isModalOpen)} className='region-menu-button'><IoLayers /></div>
      <div onClick={() => setIsModalOpen(!isModalOpen)} className="region-ring"></div>
      <LandingPageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
  );
}

export default Region;
