import React, { useState, useEffect } from 'react';
import "../css/events.css"
import LandingPageModal from '../modals/landingpage-modal';
import { IoLayers } from 'react-icons/io5';
import EventCard from '../components/events-card';
function Events() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (

        <div >
             <img src={require(`../images/icons/event_banner.webp`)} style={{ width: "100vw",height:"15vw" }} alt={` banner`} />
            <div className='events-page-header'><span style={{ borderBottom: "2px solid white", display: 'inline-block', fontFamily: "Poppins",  }}>EVENTS</span></div>
            <div className='events-page-container'>
                <EventCard name="VYUG UNVEIL"/>
            </div>
            <div onClick={() => setIsModalOpen(!isModalOpen)} className='events-menu-button'><IoLayers /></div>
            <div onClick={() => setIsModalOpen(!isModalOpen)} className="events-ring"></div>
            
            <LandingPageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default Events;
