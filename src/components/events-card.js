import React, { useState, useEffect } from 'react';
import { Card } from '@mui/material';
import "../components/events-card.css"
function EventCard(props) {
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
      backgroundImage: `url(${require(`../images/events/01.jpg`)})`,
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
            {/* Modal content goes here */}
            <p>This is the modal content</p>
            <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
          </Card>
        </div>
      )}
    </div>
  )
}
export default EventCard;