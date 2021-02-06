import React from 'react'
import thrilled from '../../../../assets/images/feedback/thrilled.svg'
import FeedbackHeader from '../FeedbackHeader'
import FeedbackFooter from '../FeedbackFooter'
import disappointed from '../../../../assets/images/feedback/disappointed.svg'

const Recommend = ({
    forwardChange,
    backwardChange
}) => {
    return (
        <div className='recommend-container'>
            <FeedbackHeader/>
            <p className='text-white' style={{ fontSize : "32px" }}>Would you recommend the Interpreter to a friend?</p>
            <div className='d-flex justify-content-around' style={{ width : "28%", margin: "0 auto" }}>
                <div>
                    <button className='ratings-btn'>
                        <img width={100} src={disappointed} alt=""/>
                        <p className='text-white mt-2' style={{ fontSize : "24px" }}>No</p>
                    </button>
                </div>
                <div>
                    <button className='ratings-btn'>
                        <img width={100} src={thrilled} alt=""/>
                        <p className='text-white mt-2' style={{ fontSize : "24px" }} >Yes</p>
                    </button>
                </div>
            </div>
            <FeedbackFooter
                forwardChange={forwardChange}
                backwardChange={backwardChange}
           />
        </div>
    )
}

export default Recommend
