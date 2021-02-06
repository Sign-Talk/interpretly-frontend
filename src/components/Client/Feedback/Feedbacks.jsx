import React, { useState } from 'react'
import FeedbackRatings from './FeedbackRatings'
import MeetingTime from './Feedbacks-client/MeetingTime'
import DelayReason from './Feedbacks-client/DelayReason'
import Attitude from './Feedbacks-client/Attitude'
import Punctual from './Feedbacks-client/Punctual'
import Recommend from './Feedbacks-client/Recommend'
import Review from './Feedbacks-client/Review'
import Regards from './Feedbacks-client/Regards'

const Feedbacks = () => {
    const [steps, setSteps] = useState(0)
    // const[]

    const forwardChange = () => {
        setSteps(steps + 1)
    }

    const backwardChange = () => {
        steps !== 0 && setSteps(steps - 1)
    }

    const renderComponent = () => {
        switch (steps) {
            case 0:
                return <FeedbackRatings
                    forwardChange={forwardChange}
                    backwardChange={backwardChange}
                />
            case 1:
                return <MeetingTime
                    status={'start'}
                    forwardChange={forwardChange}
                />
            case 2:
                return <DelayReason
                    status={'start'}
                    forwardChange={forwardChange}
                />
            case 3:
                return <Attitude
                    forwardChange={forwardChange}
                    backwardChange={backwardChange}
                />
            case 4:
                return <Punctual
                    forwardChange={forwardChange}
                    backwardChange={backwardChange}
                />
            case 5:
                return <Recommend
                    forwardChange={forwardChange}
                    backwardChange={backwardChange}
                />
            case 6:
                return <Review
                    forwardChange={forwardChange}
                    backwardChange={backwardChange}
                />
            case 7:
                return <Regards/>
            default:
                return <FeedbackRatings/>
        }
    }
    return (
        <>
            {renderComponent()}
        </>
    )
}

export default Feedbacks
