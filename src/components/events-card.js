import React, { useState, useEffect } from 'react';
import { Card } from '@mui/material';
import "../components/events-card.css"
import { IoCloseCircleOutline } from "react-icons/io5";
import RegisterIcon from "../images/icons/register.svg"
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
            backgroundImage: `url("https://imagedelivery.net/eqKVXuoRSPryHQbfbappvg/94fe100b-4aa6-4bc9-51bd-9cee5a204300/public")`,
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
            backgroundImage: `url("https://imagedelivery.net/eqKVXuoRSPryHQbfbappvg/c7f79c5b-7e88-45bb-0aa2-482addb89f00/public")`,
          }}
        />
<p className='event-card-modal-content' style={{textAlign:"center"}}> Experience the extraordinary at VYUG Unveil, a groundbreaking event offering a sneak peek into the revolutionary VYUG Metaverse. 
  This star-studded affair promises a technological and presentational spectacle unlike anything attempted in the country before. 
  Don't miss your chance to be part of history in the making—secure your spot and witness the future unfold.</p>
  <p className='event-card-modal-content1' style={{textAlign:"center"}}>16th DECEMBER, 2023</p>
  <p className='event-card-modal-content2' style={{textAlign:"center"}}>4pm onwards</p>
  <p className='event-card-modal-content3' style={{textAlign:"center"}}>INDIA EXPO MART, GREATER NOIDA</p>
           
<img src={RegisterIcon} alt={` button`} className='event-card-modal-button' onClick={() => navigate('/event-register')}/>
          </Card>
        </div>
      )}
    </div>
  )
}
export default EventCard;