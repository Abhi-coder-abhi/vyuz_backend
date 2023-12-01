import React, {useState, useEffect} from "react"
import { Card } from "@mui/material"
import "../css/event-register.css"
import { useNavigate } from 'react-router-dom';
import submitIcon from "../images/icons/submit.svg"
function EventRegistrationForm() {
    const navigate = useNavigate();
   
   const height= window.innerHeight
   const width= window.innerWidth
   const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
    email: "",
    lastName:"",  
  });
  const handleChange=(e)=>{
    const { name, value, } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/sendData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.headers.get("content-type")?.includes("application/json")) {
          return response.json();
        } else {
          return response.text();
        }
      })
      .then((data) => {

        window.alert(data.message);
       
      })
      .catch((error) => {
        console.error("Error sending data to the backend:", error);
      });
      navigate('/events')
  }
    return (
        <div className="events-page-background">
           
            <div className='register-page-header'>Registration Form</div>
            <Card className='register-page-form'  >
                <div className='register-page-container' style={{background:    "linear-gradient(rgba(34, 183, 175, 0.1), rgba(34, 183, 175, 0.962))" }} >
                    <div style={{ display: "flex", flexDirection: "column" }} className='register-page-detail'>
                        <div className="register-page-top-container">
                            <div>
                                <div className='register-page-label'>First Name</div>
                                <input className='register-page-inp1' type="text" onChange={handleChange} name="firstName"/></div>
                            <div>
                                <div className='register-page-label'>Last Name</div>
                                <input className='register-page-inp1' type="text" onChange={handleChange} name="lastName"/>
                            </div></div>
                        <div className='register-page-label'>Email</div>
                        <input className='register-page-inp' type="text" onChange={handleChange} name="email"/>
                        <div className='register-page-label'>Phone Number</div>
                        <input className='register-page-inp' type="text" onChange={handleChange} name="phoneNumber"/>
                        <div className='register-page-label'>Address</div>
                        <input className='register-page-inp' type="text" onChange={handleChange} name="address"/>
                        <div className='register-page-label'>Date Of Birth</div>
                        <input className='register-page-inp' type="date" onChange={handleChange} name="dateOfBirth"/>
                        <img src={submitIcon} className='register-page-button' alt={` button`}  onClick={() => navigate('/event-register')}/>
                    </div>
                </div>
            </Card>
            <div className="register-page-back" onClick={() => navigate('/events')}>Return to Events Page</div>
        </div>
    )
}
export default EventRegistrationForm