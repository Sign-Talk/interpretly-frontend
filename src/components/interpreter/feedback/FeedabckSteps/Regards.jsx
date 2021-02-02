import React from 'react'
import ThannkYouIcon from '../../../../assets/images/feedback/regardsIcon.png'

const Regards = () => {
    return (
        <div className='regards-container'>
            <div>
                <p style={{ fontSize: "30px", margin: 0}}>Thank You!</p>
                <p style={{ fontSize : "18px"}}>Hope you liked our service, and looking forward to working with you soon!</p>
            </div>
            <img width={379} src={ThannkYouIcon} alt=""/>
        </div>
    )
}

export default Regards