import React from 'react'
import FeedbackHeader from '../FeedbackHeader'
import './feedback-client.css'

const DelayReason = ({ status, forwardChange }) => {
    return (
        <div className='delay-reason-container'>
            <FeedbackHeader/>
            {
                status === 'start' ?
                <span className="text-white" style={{ fontSize : "32px" }}>
                    We noticed there was a delay.
                    <br/>
                    Can you tell us why the meeting started late?       
                </span>
                : status === 'end' && 
                <span  className="text-white" style={{ fontSize : "32px" }}>
                    We noticed the meeting went on longer.
                    <br/>
                    Can you tell us why the meeting got extended?       
                </span>
            }
            <div style={{ textAlign : "center", margin : "0 auto"}}>
                <div className='d-flex mb-2'>
                    <input type="checkbox" className='checkboxes' name="" id=""/>
                    <p className="text-white check-text">Connectivity Issues</p>
                </div>
                <div className='d-flex mb-2'>
                    <input type="checkbox" className='checkboxes' name="" id=""/>
                    <p className="text-white check-text">Problems from interpreter side</p>
                </div>
                <div className='d-flex mb-2'>
                    <input type="checkbox" className='checkboxes' name="" id=""/>
                    <p className="text-white check-text">Problems from End-user</p>
                </div>
                <div className='d-flex'>
                    <input type="checkbox" className='checkboxes' name="" id=""/>
                    <p className="text-white check-text">Others</p>
                </div>
            </div>
            
            <button
                 style={{ 
                    background: "#7e21db", 
                    color: "white", 
                    padding: "10px 25px", 
                    borderRadius: "5px", 
                    fontWeight: 600,
                    alignSelf: "center" 
                }}
                onClick={forwardChange}
            >
                Continue
            </button>
        </div>
    )
}

export default DelayReason
