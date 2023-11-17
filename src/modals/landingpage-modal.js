import React, { useState, useEffect } from 'react';
import { Card } from '@mui/material';
import { IoCloseCircleOutline } from "react-icons/io5";
import "./landingpage-modal.css"

function LandingPageModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Card className='landingpage-modal-card'>
      <div className='landingpage-modal-container'>
        <div style={{marginLeft:"1.25vw"}}>
          <div className='landingpage-modal-content1'>About Us</div>
          <div className='landingpage-modal-content'>Contact Us</div>
          <div className='landingpage-modal-content'>Blog</div>
        </div>
        <div>
          <div className='landingpage-modal-button' onClick={onClose}><IoCloseCircleOutline/></div>
        </div>
      </div>
    </Card>
  );
}

export default LandingPageModal;