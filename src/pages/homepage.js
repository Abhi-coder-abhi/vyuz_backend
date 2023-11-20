import React, { useState, useEffect } from 'react';
import "../css/homepage.css";
import LandingPageModal from '../modals/landingpage-modal';
import { IoLayers } from "react-icons/io5";
import ScrollIcon from '../images/icons/scroll.svg';
function HomePage(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const scrollProgress = () => {
      const scrollpx = document.documentElement.scrollTop;
      const winHeightpx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollLen = Math.ceil((scrollpx / winHeightpx) *157);
      console.log(scrollLen)
      setCurrentImageIndex(scrollLen);
    };
  
    useEffect(() => {
      const handleScroll = ()=>{
        scrollProgress();
      }
      window.addEventListener("scroll",handleScroll)
      console.log(  window.addEventListener("scroll",handleScroll))
      return ()=> window.removeEventListener("scroll",handleScroll)
    },[])
    const scrollDown = () => {
      window.scrollBy(0, 200);
    };
    console.log(currentImageIndex)
    return(
        <div className="App">
      <header className='App-header'>
         <img src={require(`../images/${currentImageIndex}.png`)} style={{height:"100vh",width:"100vw"}} alt={` ${currentImageIndex + 1}` }/> 
         <img src={require(`../images/logo.png`)} className='App-logo' alt={` ${currentImageIndex + 1}` }/> 
         <div onClick={() => setIsModalOpen(!isModalOpen)} className='App-menu-button'><IoLayers/></div>
         <div onClick={() => setIsModalOpen(!isModalOpen)} className="ring"></div>
         <div onClick={scrollDown}  className='App-scroll-button'> <img src={ScrollIcon}  alt={` ${currentImageIndex + 1}` }/></div>
         <div  className='App-scroll'>Scroll to Move</div>
      </header>
      <LandingPageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
    )
}
export default HomePage;