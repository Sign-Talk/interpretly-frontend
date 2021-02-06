import React from 'react'
import FeedbackHeader from '../FeedbackHeader'
import FeedbackFooter from '../FeedbackFooter'

const Review = ({
    forwardChange,
    backwardChange
}) => {
    return (
        <div className='review-container'>
            <FeedbackHeader/>
            <div>
                <p style={{ fontSize : "32px" }} className="text-white m-0">Write a review on your experience with the interpreter.</p>
                <p style={{ fontSize : "24px" }} >(In about 50-100 words)</p>
            </div>
            <textarea 
                className='review-content' 
                cols="10" 
                rows="10"
                placeholder='Remarks or Suggestions'
            ></textarea>
            <FeedbackFooter
                forwardChange={forwardChange}
                backwardChange={backwardChange}
           />
        </div>
    )
}

export default Review
