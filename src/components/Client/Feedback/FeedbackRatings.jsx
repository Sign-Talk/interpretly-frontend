import React from 'react'
import './feedback.css'
import Disappointed from '../../../assets/images/feedback/disappointed.svg'
import indifferent from '../../../assets/images/feedback/indifferent.svg'
import smile from '../../../assets/images/feedback/smile.svg'
import unhappy from '../../../assets/images/feedback/unhappy.svg'
import thrilled from '../../../assets/images/feedback/thrilled.svg'
import FeedbackHeader from './FeedbackHeader'
import FeedbackFooter from './FeedbackFooter'

const FeedbackRatings = ({
    forwardChange,
    backwardChange
}) => {
    return (
        <div className='feedback-container'>
            <FeedbackHeader/>

            <span style={{ fontSize : "32px" }} className='text-white'>
                We love to hear from you!
                <br/>
                How was your experience with our service?
            </span>

            <div className='ratings'>
                <div>
                    <button>
                        <img width={100} src={Disappointed} alt=""/>
                        <p className='text-white mt-2' style={{ fontSize: "24px"}}>Awful</p>
                    </button>
                </div>
                <div>
                    <button>
                        <img width={100} src={unhappy} alt=""/>
                        <p className='text-white mt-2' style={{ fontSize: "24px"}}>Bad</p>
                    </button>
                </div>
                <div>
                    <button>
                        <img width={100} src={indifferent} alt=""/>
                        <p className='text-white mt-2' style={{ fontSize: "24px"}}>Okay</p>
                    </button>
                </div>
                <div>
                    <button>
                        <img width={100} src={smile} alt=""/>
                        <p className='text-white mt-2' style={{ fontSize: "24px"}}>Good</p>
                    </button>
                </div>
                <div>
                    <button>
                        <img width={100} src={thrilled} alt=""/>
                        <p className='text-white mt-2' style={{ fontSize: "24px"}}>Great</p>
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

export default FeedbackRatings
