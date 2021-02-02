import React from 'react'
import FeedbackHeader from '../FeedbackHeader'
import FeedbackFooter from '../FeedbackFooter'
import starIcon from '../../../../assets/images/feedback/Star.svg'

import './feedback-client.css'

const Punctual = ({
    forwardChange,
    backwardChange
}) => {
    return (
        <div className='punctual-container'>
            <FeedbackHeader/>
            <div>
                <p style={{ fontSize: "32px" }} className='text-white'>How punctual was the interpreter?</p>
                <p style={{ fontSize: "24px" }} >(On a scale of 1-5)</p>
            </div>
            <div className='star-icons-container'>
                <div className='star-icons'>
                    <button className='ratings-btn'>
                        <img src={starIcon} width={36} alt=""/>
                        <p className='m-0 no'>1</p>
                        <p className='msg'>Awful</p>
                    </button>
                </div>
                <div className='star-icons'>
                    <button className='ratings-btn'>
                        <img src={starIcon} width={36} alt=""/>
                        <p  className='m-0 no'>2</p>
                        <p className='msg'>Bad</p>
                    </button>
                </div>
                <div className='star-icons'>
                    <button className='ratings-btn'>
                        <img src={starIcon} width={36} alt=""/>
                        <p className='m-0 no'>3</p>
                        <p className='msg'>Okay</p>
                    </button>
                </div>
                <div className='star-icons'>
                    <button className='ratings-btn'>
                        <img src={starIcon} width={36} alt=""/>
                        <p className='m-0 no'>4</p>
                        <p className='msg'>Good</p>
                    </button>
                </div>
                <div className='star-icons'>
                    <button className='ratings-btn'>
                        <img src={starIcon} width={36} alt=""/>
                        <p className='m-0 no'>5</p>
                        <p className='msg'>Great</p>
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

export default Punctual
