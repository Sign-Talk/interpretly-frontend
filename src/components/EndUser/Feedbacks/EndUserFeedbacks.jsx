import React, { useState } from 'react'
import FeedbackRatings from './FeedbackSteps/Ratings'
import Quality from './FeedbackSteps/Quality'
import Recommend from './FeedbackSteps/Recommend'
import Regards from './FeedbackSteps/Regards'

const EndUserFeedbacks = () => {
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
                return <Quality
                    forwardChange={forwardChange}
                    backwardChange={backwardChange}
                />
            case 2:
                return <Recommend
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

export default EndUserFeedbacks
