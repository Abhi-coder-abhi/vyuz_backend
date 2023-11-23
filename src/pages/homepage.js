import React, { useState, useEffect } from 'react';
import "../css/homepage.css";
import LandingPageModal from '../modals/landingpage-modal';
import { IoLayers } from "react-icons/io5";
import ScrollIcon from '../images/icons/scroll.svg';
import { Card } from '@mui/material';
import { IoCloseCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightpx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollLen = Math.ceil((scrollpx / winHeightpx) * 157);
    console.log(scrollLen)
    setCurrentImageIndex(scrollLen);
  };

  useEffect(() => {
    const handleScroll = () => {
      scrollProgress();
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const scrollDown = () => {
    window.scrollBy(0, 200);
  };
  useEffect(() => {
    // Open the register modal after three seconds
    const timeoutId = setTimeout(() => {
      setIsRegisterModalOpen(true);
    }, 2000);

    // Clean up the timeout
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="App">
      <header className='App-header'>
        <img src={require(`../images/${currentImageIndex}.webp`)} style={{ height: "100vh", width: "100vw" }} alt={` ${currentImageIndex + 1}`} />
        <img src={"https://imagedelivery.net/eqKVXuoRSPryHQbfbappvg/ab86a741-942b-451b-3a54-5160cd9c0100/public"} className='App-logo' alt={` ${currentImageIndex + 1}`} />
        <div onClick={() => setIsModalOpen(!isModalOpen)} className='App-menu-button'><IoLayers /></div>
        <div onClick={() => setIsModalOpen(!isModalOpen)} className="ring"></div>
        <div onClick={scrollDown} className='App-scroll-button'> <img src={ScrollIcon} alt={` ${currentImageIndex + 1}`} /></div>
        <div className='App-scroll'>Scroll to Move</div>
      </header>
      {isRegisterModalOpen && (
        <div className='homepage-register-modal-overlay'>
          <Card
            className="homepage-register-modal" >
            <div
              className="homepage-register-modal-image"
              style={{
                backgroundImage: `url("https://imagedelivery.net/eqKVXuoRSPryHQbfbappvg/c22b4dda-807f-4305-b30b-c45474571300/public")`,
              }}
            />
           <div className='homepage-register-modal-button1' onClick={() => setIsRegisterModalOpen(false)}><IoCloseCircleOutline/></div>
            <button className='homepage-register-modal-button' onClick={() => navigate('/events')}>Register</button>
          </Card>

        </div>
      )}
      <LandingPageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
export default HomePage;