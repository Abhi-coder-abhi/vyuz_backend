import React, { useState, useEffect } from 'react';
import "../css/events.css"
import RemainingPageModal from '../modals/remainingpage-modal';
import { IoLayers } from 'react-icons/io5';
import EventCard from '../components/events-card';
function Events() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (

        <div>
            <div className='events-page-header'><span style={{ borderBottom: "2px solid black", display: 'inline-block', fontFamily: "Poppins", color: "black" }}>Events</span></div>
            <div className='events-page-container'>
                <EventCard name="VYUG"/>
            </div>
            <div onClick={() => setIsModalOpen(!isModalOpen)} className='events-menu-button'><IoLayers /></div>
            <div onClick={() => setIsModalOpen(!isModalOpen)} className="events-ring"></div>
            
            <RemainingPageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default Events;
