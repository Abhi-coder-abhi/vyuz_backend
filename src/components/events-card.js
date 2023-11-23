import React, { useState, useEffect } from 'react';
import { Card } from '@mui/material';
import "../components/events-card.css"
import { IoCloseCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
function EventCard(props) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Card
        className={`event-card-card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div
          className="event-card-image"
          style={{
            backgroundImage: `url("https://imagedelivery.net/eqKVXuoRSPryHQbfbappvg/c22b4dda-807f-4305-b30b-c45474571300/public")`,
          }}
        />
        <div className="event-card-centered-content">
          {props.name}
        </div>
        <div className="event-card-centered-content1">
          Click to Open
        </div>
      </Card>
      {isModalOpen && (
        <div className='event-card-modal-overlay'>
          <Card className="event-card-modal">

            <div className='event-card-modal-header'>VYUG UNVEIL</div>
            <div className='event-card-modal-close' onClick={() => setIsModalOpen(false)}><IoCloseCircleOutline /></div>
            <div className='event-card-modal-header-text'>"Bridging virtual with real!"</div>
            <div className='event-card-modal-container'>
              <div className='event-card-modal-about-container'>
                <div className='event-card-modal-about'>About</div>
                <p style={{ textAlign: "center" }}>Experience the extraordinary at VYUG Unveil, a groundbreaking event offering a sneak peek into the revolutionary VYUG Metaverse. This star-studded affair promises a technological and presentational spectacle unlike anything attempted in the country before.
                  Don't miss your chance to be part of history in the making—secure your spot and witness the future unfold.</p>
              </div>
              <Card className='event-card-modal-card'>
                <div style={{ textAlign: "center", color: "white", fontWeight: "500", marginTop: "0.4vw" }}>04 – 08 pm</div>
                <div style={{ textAlign: "center", color: "white", fontWeight: "500" }}>16th December, 2023</div>
                <div style={{ textAlign: "center", color: "white", fontWeight: "500" }}>Delhi NCR</div>
              </Card>
            </div>
            <button className='event-card-modal-button' onClick={() => navigate('/event-register')}>Register</button>
          </Card>
        </div>
      )}
    </div>
  )
}
export default EventCard;