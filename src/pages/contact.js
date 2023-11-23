import React, { useState, useEffect } from 'react';
import "../css/contact.css"
import RemainingPageModal from '../modals/remainingpage-modal';
import { IoLayers } from "react-icons/io5";
import { Box, Card } from '@mui/material';
import backgroundImage from '../images/icons/contact-theme.jpg';
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import 'react-social-icons/x'
import 'react-social-icons/discord'

function ContactUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div  >
      <div className='contact-page-header'><span style={{ borderBottom: "2px solid black", display: 'inline-block', fontFamily: "Poppins", color: "black" }}>Contact Us</span></div>
      <div className='contact-page-header'><span style={{ borderBottom: "2px solid black", display: 'inline-block', fontFamily: "Poppins", color: "black" }}>Let's Start a Conversation</span></div>

      <Card className='contact-page-form' >
        <div className='contact-page-container' >
          <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#f5f5f5" }} className='contact-page-detail'>
            <div className='contact-page-label'>Name</div>
            <input className='contact-page-inp' type="text" />
            <div className='contact-page-label'>Email</div>
            <input className='contact-page-inp' type="text" />
            <div className='contact-page-label'>Desciption</div>
            <textarea className='contact-page-inp' type="text" />
            <button className='contact-page-button' >Submit</button>
          </div>
          <div style={{ backgroundImage: `url("https://imagedelivery.net/eqKVXuoRSPryHQbfbappvg/c4fbd631-4dc4-4e3e-ce5a-4b3aff0fea00/public")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='contact-page-image'>
            <div className='contact-page-links-title'>Connect Us</div>
            <div className='contact-page-links'>
              
              <SocialIcon url="https://facebook.com" href="https://www.facebook.com/VyugOfficial/"  className='contact-page-link' />
              <SocialIcon url="https://instagram.com" href="https://www.instagram.com/vyugofficial/" className='contact-page-link' />
              <SocialIcon url="https://x.com" href='https://twitter.com/VyugOfficial' className='contact-page-link'/>        
              <SocialIcon url="https://discord.com" href="https://discord.com/invite/VS3vStSepB" className='contact-page-link'/>
            
            </div>
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
