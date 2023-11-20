import React, { useState, useEffect } from 'react';
import "../css/contact.css"
import RemainingPageModal from '../modals/remaingpage-modal';
import { IoLayers } from "react-icons/io5";
import { Box, Card } from '@mui/material';
import backgroundImage from '../images/icons/contact-theme.jpg'; 

function ContactUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div  >
      <div className='contact-page-header'><span style={{ borderBottom: "2px solid rgb(20, 184, 234)", display: 'inline-block', fontFamily: "Poppins", color: "rgb(20, 184, 234)" }}>Contact Us</span></div>

      <Card className='contact-page-form' >
        <div className='contact-page-container' >
          <div style={{display:"flex",flexDirection:"column",backgroundColor: "#f5f5f5",width:"55vw"}}>
          <div className='contact-page-label'>Name</div>
          <input className='contact-page-inp' type="text" />
          <div className='contact-page-label'>Email</div>
          <input className='contact-page-inp' type="text" />
          <div className='contact-page-label'>Desciption</div>
          <textarea className='contact-page-inp'  type="text"/>
          <button className='contact-page-button' >Submit</button>
          </div>
          <div style={{ backgroundColor:"yellow"}}>

          </div>
        </div>
      </Card>

      <div onClick={() => setIsModalOpen(!isModalOpen)} className='contact-menu-button'><IoLayers /></div>
      <div onClick={() => setIsModalOpen(!isModalOpen)} className="contact-ring"></div>
      <RemainingPageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>

  );
}

export default ContactUs;
