import React from "react"
import { Card } from "@mui/material"
import "../css/event-register.css"
import { useNavigate } from 'react-router-dom';
function EventRegistrationForm() {
    const navigate = useNavigate();
   const height= window.innerHeight
   const width= window.innerWidth
   console.log(width)
   console.log(height)
    return (
        <div>
            <div className='register-page-header'>Registration Form</div>
            <Card className='register-page-form' >
                <div className='register-page-container' >
                    <div style={{ display: "flex", flexDirection: "column" }} className='register-page-detail'>
                        <div className="register-page-top-container">
                            <div>
                                <div className='register-page-label'>First Name</div>
                                <input className='register-page-inp1' type="text" /></div>
                            <div>
                                <div className='register-page-label'>Last Name</div>
                                <input className='register-page-inp1' type="text" />
                            </div></div>
                        <div className='register-page-label'>Email</div>
                        <input className='register-page-inp' type="text" />
                        <div className='register-page-label'>Phone Number</div>
                        <input className='register-page-inp' type="text" />
                        <div className='register-page-label'>Address</div>
                        <input className='register-page-inp' type="text" />
                        <div className='register-page-label'>Date Of Birth</div>
                        <input className='register-page-inp' type="date" />
                        <button className='register-page-button' onClick={() => navigate('/events')} variant="ghost">Submit</button>
                    </div>
                </div>
            </Card>
            <div className="register-page-back" onClick={() => navigate('/events')}>Return to Events Page</div>
        </div>
    )
}
export default EventRegistrationForm