import React from 'react'
import paymentErrorIcon from '../../../assets/images/Payment-fail-illustration.svg'
import './Client-payment.css'

const PaymentFailed = () => {
    return (
        <div className='payment-failed-container'>
            <div className='payment-error-content'>
                <p className="msg1" style={{ fontSize : "30px"}}>Oops!</p>
                <p >Payment processing failed due to an error at bank or wallet gateway</p>
                <span style={{ color : "#ab57ff", fontSize : "15px"}}>
                    Note:
                    <p style={{ color : "#ab57ff", fontSize : "15px"}}>if your transaction has failed. any amount deducted, will be auto-refunded in 4-5 working days</p>
                </span>
            </div>
            <button className="retry-btn">Retry</button>
            <img src={paymentErrorIcon} width={250} style={{ margin : "auto"}} alt="payment error"/>
        </div>
    )
}

export default PaymentFailed
