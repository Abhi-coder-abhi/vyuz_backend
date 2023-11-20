import React, { useState, useEffect } from 'react';
import "../css/events.css"
import RemainingPageModal from '../modals/remaingpage-modal';
import { IoLayers } from 'react-icons/io5';
function Events() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    
   <div>
     <div onClick={() => setIsModalOpen(!isModalOpen)} className='events-menu-button'><IoLayers/></div>
         <div onClick={() => setIsModalOpen(!isModalOpen)} className="events-ring"></div>
         <RemainingPageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
   </div>
  );
}

export default Events;
