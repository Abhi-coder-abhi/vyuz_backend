import React, { useState, useEffect } from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import HomePage from './pages/homepage';
 import ContactUs from './pages/contact';
 import AboutUs from './pages/about';
 import Events from './pages/events';
 import Region from './pages/region';
 import EventRegistrationForm from './pages/event-register';

function App() {

  return (
    <Router className="App">
      <Routes>
      <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/region" element={<Region />} />
        <Route path="/event-register" element={<EventRegistrationForm />} />
      </Routes>
    </Router>
    
  );
}

export default App;
