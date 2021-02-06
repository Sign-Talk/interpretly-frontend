import React from 'react'
import FeedbackHeader from '../FeedbackHeader'
import './feedback-client.css'

const MeetingTime = ({ status, forwardChange }) => {
    return (
        <div className='meeting-time-container'>
            <FeedbackHeader/>
            <div>
                {
                    status === 'start' ?
                        <span style={{ fontSize : "32px"}} className='text-white'>
                            Did your meeting Start at
                            <br/>
                            <p style={{ color : "#ab57ff"}}>8:30 AM?</p>
                        </span>
                    :   status == 'end' &&
                        <span style={{ fontSize : "32px"}} className='text-white'>
                            Did your meeting End at
                            <br/>
                            <p style={{ color : "#ab57ff"}}>10:30 AM? (2hr)</p> 
                        </span>
                }
                <div className='d-flex justify-content-around mt-2' style={{ width: "15%", margin : "0 auto"}}>
                    <span className='d-flex mr-3'>
                        <input type="checkbox" className='checkboxes' name="" id=""/>
                        <p className='text-white' style={{ fontSize : "32px"}}>yes</p>
                    </span>
                    <span className='d-flex ml-3'>
                        <input type="checkbox" className='checkboxes' name="" id=""/>
                        <p className='text-white' style={{ fontSize : "32px"}}>No</p>
                    </span>
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

export default MeetingTime
