import React from 'react'

const FeedbackFooter = ({ forwardChange, backwardChange }) => {
    return (
        <div>
            <button
                onClick={backwardChange}
                style={{ 
                    marginRight: "20px", 
                    border: "2px solid #7e21db",
                    color: "white", 
                    background: "none", 
                    padding: "10px 30px", 
                    borderRadius: "5px" 
                }} >Back</button>
            <button
                onClick={forwardChange} 
                style={{ 
                    background: "#7e21db", 
                    color: "white", 
                    padding: "10px 25px", 
                    borderRadius: "5px", 
                    fontWeight: 600 
                }}>Next</button>
        </div>
    )
}

export default FeedbackFooter
