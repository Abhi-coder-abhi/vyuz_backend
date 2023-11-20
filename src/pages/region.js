import React, { useState, useEffect } from 'react';
import "../css/region.css"
import RemainingPageModal from '../modals/remaingpage-modal';
import { IoLayers } from 'react-icons/io5';
function Region() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
   <div>
     <div onClick={() => setIsModalOpen(!isModalOpen)} className='region-menu-button'><IoLayers/></div>
         <div onClick={() => setIsModalOpen(!isModalOpen)} className="region-ring"></div>
         <RemainingPageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
   </div>
  );
}

export default Region;
