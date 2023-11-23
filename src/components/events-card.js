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
          <div
          className="event-card-image"
          style={{
            backgroundImage: `url(${require('../images/icons/event-about.webp')})`,
          }}
        />
<p className='event-card-modal-content' style={{textAlign:"center"}}> Experience the extraordinary at VYUG Unveil, a groundbreaking event offering a sneak peek into the revolutionary VYUG Metaverse. 
  This star-studded affair promises a technological and presentational spectacle unlike anything attempted in the country before. 
  Don't miss your chance to be part of history in the making—secure your spot and witness the future unfold.</p>
  <p className='event-card-modal-content1' style={{textAlign:"center"}}>16th DECEMBER, 2023</p>
  <p className='event-card-modal-content2' style={{textAlign:"center"}}>4pm onwards</p>
  <p className='event-card-modal-content3' style={{textAlign:"center"}}>INDIA EXPO MART, GREATER NOIDA</p>
           
<img src={require(`../images/icons/REGISTER.webp`)} alt={` button`} className='event-card-modal-button' onClick={() => navigate('/event-register')}/>
          </Card>
        </div>
      )}
    </div>
  )
}
export default EventCard;