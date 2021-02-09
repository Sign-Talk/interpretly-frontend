import React from 'react';
import ReactModal from 'react-responsive-modal';
import classes from './NotificationModal.module.css';

const NotificationModal = ({ open, setOpen }) => {
  return (
    <div>
      <ReactModal
        open={open}
        onClose={() => setOpen(false)}
        classNames={{
          modal: 'Step1Model notification-modal',
        }}
        center
      >
        <div className={classes.Content}>
          <div className={classes.Title}>Notification</div>
          <div className={classes.Subtitle}>Your Job post has not received any applicants yet. Check job details for more info.</div>
          <div className={classes.Card}>
            <div>
              <h4 className='text-light font-weight-light '>
                <span className='colorPink'> Meeting #02 - Remote </span> &nbsp; &#8226; &nbsp;
                <span className='colorWhite'>
                  <b>21st Dec - 21st Jan &nbsp; &#8226; &nbsp;11:00 AM</b>
                </span>
              </h4>
            </div>
            <div className={classes.Duration}>
              Duration: <span className='colorPink'>4 Hours/Day</span>
            </div>
            <div className={classes.Footer}>
              <div>Amount: ₹700/Day</div>
              <div>No. of Interpreters required: 3</div>
            </div>
          </div>
          <div className={classes.FooterButton}>
            <button className='cancelmeetingyes displayflex' onClick={() => setOpen(false)}>
              Go to Job Details
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default NotificationModal;
