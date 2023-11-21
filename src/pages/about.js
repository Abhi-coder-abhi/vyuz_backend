import React, { useState, useEffect } from 'react';
import "../css/about.css"
import RemainingPageModal from '../modals/remainingpage-modal';
import { IoLayers } from 'react-icons/io5';

function AboutUs() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
   <div>
     <div onClick={() => setIsModalOpen(!isModalOpen)} className='about-menu-button'><IoLayers/></div>
         <div onClick={() => setIsModalOpen(!isModalOpen)} className="about-ring"></div>
         <RemainingPageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
   </div>
  );
}

export default AboutUs;
