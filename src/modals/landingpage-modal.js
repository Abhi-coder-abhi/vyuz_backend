import React, { useState, useEffect } from 'react';
import { Card } from '@mui/material';
import { IoCloseCircleOutline } from "react-icons/io5";
import "./landingpage-modal.css"
import { useNavigate } from 'react-router-dom';

function LandingPageModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  if (!isOpen) return null;
  
  return (
    <Card className='landingpage-modal-card' >
      <div className='landingpage-modal-container'>
        <div style={{ marginLeft: "1.25vw", marginTop: "3.5vh",alignItems:"flex-start",textAlign:"right"}}>
        <div className='landingpage-modal-content' onClick={() => navigate('/')}>
            Home</div>
          <div className='landingpage-modal-content1' onClick={() => navigate('/about')}>
            About Us</div>
            <div className='landingpage-modal-content1' onClick={() => navigate('/events')}>Region</div>
          <div className='landingpage-modal-content1' onClick={() => navigate('/events')}>Events</div>
          <div className='landingpage-modal-content1' onClick={() => navigate('/contact')}>
           Contact Us</div>
           <div className='landingpage-modal-button' onClick={onClose}><IoCloseCircleOutline /></div>
        </div>
        <div style={{ marginTop: "1.5vh" }}>
        </div>
      </div>
    </Card>
  );
}

export default LandingPageModal;