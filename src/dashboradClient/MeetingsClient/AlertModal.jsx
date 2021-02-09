import React from 'react';
import ReactModal from 'react-responsive-modal';
import NotifyIcon from '../../assets/images/notify2.svg';
import classes from './AlertModal.module.css';

const AlertModal = ({ open, setOpen }) => {
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
          <div>
            <img style={{ height: '8.3vw', width: '13.3vw', margin: 'auto' }} src={NotifyIcon} alt='' />
          </div>
          <div className={classes.Title}>Alert</div>
          <div className={classes.Subtitle}>
            According to the interpreter, your last meeting was extended. Please Verify the same before{' '}
            <span className='colorPink'> 31st Jan</span>
          </div>
          <div className={classes.Subtitle}>
            Failing to do so, you will be charged a fee subject to the call extension details provided by the interpreter.
          </div>
          <div className={classes.Buttons}>
            <button className='cancelmeetingno '>No, Go back</button>
            <button className='cancelmeetingyes '>Yes, I'm Sure</button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default AlertModal;
