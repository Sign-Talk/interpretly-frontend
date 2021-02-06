import React, { useState } from 'react'
import FeedbackAttitude from './FeedabckSteps/Attitude'
import FeedbackRatings from './FeedabckSteps/Ratings'
import InterpreterReview from './FeedabckSteps/InterpreterReview'
import Regards from './FeedabckSteps/Regards'

const IterpreterFeedbacks = () => {
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
                return <FeedbackAttitude
                    forwardChange={forwardChange}
                    backwardChange={backwardChange}
                />
            case 2:
                return <InterpreterReview
                    forwardChange={forwardChange}
                    backwardChange={backwardChange}
                />
            case 3:
                return <Regards />
            default:
                return <FeedbackRatings />
        }
    }
    return (
        <>
            {renderComponent()}
        </>
    )
}

export default IterpreterFeedbacks
