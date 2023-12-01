import React, { useState, useEffect } from 'react';
import "../css/about.css"
import LandingPageModal from '../modals/landingpage-modal';
import { IoLayers } from 'react-icons/io5';

function AboutUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [yPosition, setYPosition] = useState("relative");

  const scrollThreshold = 1024;

  useEffect(() => {
    const handleScroll = () => {

      const scrollPosition = window.scrollY;

      if (scrollPosition >= scrollThreshold) {
    
        setYPosition("sticky");

      } else {
        // Reset to original height if scroll position is less than the threshold
        setYPosition("relative");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <img src={require(`../images/icons/event_banner.webp`)} style={{ width: "100vw", height: "15vw" }} alt={` banner`} />
      <div className='about-page-header'><span style={{ borderBottom: "2px solid white", display: 'inline-block', fontFamily: "Poppins", }}>ABOUT US</span></div>
      <div className='about-page-container2-title' >Welcome To VYUG, A Vibrant Community Of Creators and Innovators!  </div>
      <div className='about-page-container1'>
        <div>
          <div className='about-page-text1'>VYUG denotes a Virtual Yug (Generation) that takes you on a tour of the world in a few clicks.
            With it, you can access anything from the depths of your floors to the heights of the sky, as in your daydreams.
            VYUG is not just another metaverse platform but a transformative space where technologies meet realism.
            It is like having a clone, where your avatar is more than just a motion icon- it is an extension of yourself. </div>
          <div className='about-page-container1-text'>VYUG is WHERE YOU BELONG. </div>
        </div>
      </div>
      <div className='about-page-container2-title'>Why The World Needs VYUG?</div>
      <div className='about-page-container2-text'>If you want to explore Metaverse, you should do it with the best. The world needs VYUG because the world needs CHANGE. Just imagine a world where users become owners, and innovation knows no boundaries. We are saying so because VYUG is not only about experiencing virtual reality, it is about living in it.
        The real potential of this metaverse is far beyond the limits of your imagination, and yes, that is what we are coming up with.</div>
      <div className='about-page-full-container3' style={{position: yPosition,overflow:"hidden"}}>
        <div className='about-page-container2-title'>Changing The Face Of Virtual Reality </div>
        <div className='about-page-container3'>
          <div>
            <div className='about-page-container3-text'>Tie your shoelaces, get ready to have fun, and explore the chaos of your life wonderfully while having chips on your couches. There are some of the key elements that make VYUG truly exceptional. To be precise, do you need to complete your education and get credited with a salary in your account but desire not to step out? Are you craving to have fun and party with your friends who have been abroad for many years? Also, do you want to vote in elections but are obsessed with the crowded rallies?
              Or are you a medical student who is exhausted from studying thick-hard books?
            </div>
            <div className='about-page-container3-text'>
              Look no further than VYUG because we have covered it all in our metaverse platform. You can virtually access everything you desire with a real feel and experience. VYUG does not only incorporate VR (Virtual Reality) and headset technologies that detach you from the real environment and take you to another imaginary world.
              It includes everything from accessing metaverse spaces to creating avatars through Augmented Reality (AR) glasses that project computer-generated images onto the surrounding environment to having mixed reality experiences that combine real and virtual worlds.
            </div>
          </div>
        </div>
      </div>
      <div className='about-page-card' style={{position:"relative"}}>
        <div className='about-page-card-title'>Vision Behind VYUG</div>
        <div className='about-page-card-container1'>
          <div>
            <div className='about-page-card-container1-image-text'>Ubaid Chand</div>
            <div className='about-page-card-container1-image-text1'>Chief Executive Officer</div>
          </div>
          <div>
            <div className='about-page-card-container1-text'>Building metaverse or its platform is a long-term project, especially when it incorporates various sectors as its business partners.
              But we are committed to revolutionise the way we live. By launching VYUG, we expect it to be a great successor in the global market.
              With it, we desire to attain a future of human connection integrated with technology that creates a boundless space for innovation and collaboration.
              Although the world has already welcomed the metaverse in their lives, we are developing far more than just a Gaming platform, as mentioned earlier.
            </div>
            <div className='about-page-card-container1-text1'>
              Seamlessly merging Augmented Reality (AR), Virtual Reality (VR), and the internet, VYUG enables immersive experiences, global collaboration, and limitless creativity.
              Trust me, VYUG is built to revolutionise the world with its multi-trillion dollars opportunities.
            </div>
          </div>
        </div>
        <div className='about-page-card-container2 '>

          <div>
            <div className='about-page-card-container2-text'>We are super excited about building VYUG ( the Virtual YUG)- demonstrating our firm belief that it will be the next generation of the internet (Web 3.0) for each age group.
              We are coming up with technologies like Virtual Reality (VR) and Augmented Reality (AR).
              The concept art, prototype devices, and tech demos are already incorporated into our launching strategies; a more immersive and 3D experience will be there to see ahead.
            </div>
            <div className='about-page-card-container2-text1'>
              VYUG empowers individuals, businesses, and communities to thrive in a dynamic, interconnected digital universe.
              At VYUG, we promise to enact unprecedented opportunities for education, work, and entertainment while maintaining a strong commitment to ethical and security considerations.
            </div>
            <div className='about-page-card-container2-text1'>
              If you ask me to define its quality, I must say, "It will give you the sense of presence, as though you are there with the other person or in the other location."
              We have set out to redefine the way we perceive and engage with virtual worlds.
            </div>
          </div>
          <div>
            <div className='about-page-card-container2-image-text'>Richa Thakur</div>
            <div className='about-page-card-container2-image-text1'>Chief Marketing Officer</div>
          </div>
        </div>
      </div>
      <div onClick={() => setIsModalOpen(!isModalOpen)} className='about-menu-button'><IoLayers /></div>
      <div onClick={() => setIsModalOpen(!isModalOpen)} className="about-ring"></div>
      <LandingPageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default AboutUs;
