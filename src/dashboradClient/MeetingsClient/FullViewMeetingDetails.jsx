import { InputBase } from '@material-ui/core';
import { StarBorder } from '@material-ui/icons';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React, { useState } from 'react';
import ReactModal from 'react-responsive-modal';
import infoIcon from '../../assets/images/Icon feather-info.svg';
import protectedshield from '../../assets/images/protecctedshield.svg';
import Navbar from '../Navbar/Navbar';
import AlertModal from './AlertModal';
import NogiationApplicationCard from './NogiationApplicationCard';
import NormalApplication from './NormalApplicationCard';
import NotificationModal from './NotificationModal';

const FullViewMeetingDetails = ({ SetShowPaymentMethod }) => {
  const [showmodel, setshowmodel] = useState(false);

  const [alertModal, setAlertModal] = useState(true);
  const [notificationModal, setNotificationModal] = useState(true);
  const [addMeetingLink, setaddMeetingLink] = useState(false);

  const [MeetingLink, setMeetingLink] = useState(false);
  const [addedlink, setaddedlink] = useState(false);

  const handleCancelMeeting = () => {
    setshowmodel(true);
    console.log('clicked');
  };

  return (
    <div
      className='col-10 ml-auto c0 p-0'
      style={{
        Width: '44.271vw',
        position: 'relative',
      }}
    >
      <Navbar title={`Meetings`} Backicon={ArrowBackIosIcon} SetShowPaymentMethod={SetShowPaymentMethod} />

      {/* details are below.. */}

      <ReactModal
        open={showmodel === true}
        onClose={() => {
          setshowmodel(false);
        }}
        classNames={{
          modal: 'Step1Model my-modal',
        }}
        center
      >
        <p className='paragraphinsidedtep1 colorwhites1'>
          Are you sure you want to cancel <br /> the meeting !
        </p>
        <p className='paragraphinsidedtep1'>
          You will be charged <span className='white'> ₹100 </span>for cancelation
        </p>
        <div className='floatleft cancelmeetingpar' style={{ marginTop: '5vw' }}>
          <button className='cancelmeetingno displayflex' onClick={() => setshowmodel(false)}>
            No, Go back
          </button>

          <button className='cancelmeetingyes displayflex' onClick={() => SetShowPaymentMethod(false)}>
            Yes, I'm Sure
          </button>
        </div>
      </ReactModal>
      <ReactModal
        open={addMeetingLink === true}
        onClose={() => {
          setaddMeetingLink(false);
        }}
        classNames={{
          modal: 'Step1Model',
        }}
        center
      >
        <p className='paragraphinsidedtep1 colorWhite' style={{ marginTop: '40px' }}>
          <b>Enter Meeting Invite Link</b>
        </p>
        <InputBase
          onChange={(e) => setMeetingLink(e.target.value)}
          style={{
            background: 'white',
            borderRadius: '5px',
            width: '90%',
            margin: '10px 0px 15px 5%',
            padding: '5px 0px',
          }}
        />
        <button
          className='addMeetingLinkBtn'
          style={{ margin: '20px 0px 30px 40%' }}
          onClick={() => {
            setaddMeetingLink(false);
            setaddedlink(true);
          }}
        >
          Save
        </button>
      </ReactModal>
      <NotificationModal open={notificationModal} setOpen={setNotificationModal} />
      <AlertModal open={alertModal} setOpen={setAlertModal} />

      <div className='col-12 pb-5 mt-4'>
        <div className='parOfSeeAll'>
          <div className=' col-8'>
            <h4 className='text-light font-weight-light '>
              <span className='colorPink'> Meeting #02 - Remote </span> &#8226;
              <span className='colorWhite'>
                <b>21st Dec - 21st Jan &#8226; 11:00 AM</b>
              </span>
            </h4>
          </div>
          <div className='seeAllClient' onClick={handleCancelMeeting}>
            <h5 className='font-weight-light CancelMeeting cursor'>
              <b>Cancel Meeting</b>
            </h5>
          </div>
        </div>

        <div style={{ marginLeft: '14px', marginTop: '-14px', fontSize: '26px' }}>
          Duration :{' '}
          <span className='colorPink'>
            {' '}
            <b> 4 Hours/Day </b>
          </span>
        </div>
        <div className=' ml-12 floatleft mt-24'>
          <div className=' displayflex'>
            <div className='floatleft'>
              <span className='displayflex'>Amount : &#8377; 700/Day</span>
              <span className='displayflex'>
                <img
                  className='infoicon '
                  // width={20}
                  src={infoIcon}
                  alt='infoIcon'
                />
              </span>
            </div>
          </div>
          <div className='displayflex'>No of Interpreter required : 3 </div>
          <div className='displayflex'>
            Requirement:{' '}
            <span className='colorWhite'>
              {' '}
              <b>Hindi Interpreter (ISL) </b>{' '}
            </span>
          </div>
        </div>

        <div>
          {!addedlink ? (
            <button className='addMeetingLinkBtn' onClick={() => setaddMeetingLink(true)}>
              <b> Add Meeting Link</b>
            </button>
          ) : (
            <div className='addedMeeting'>
              <span className='addmeetingspan'> https://meet.google.com</span> Copy
            </div>
          )}
        </div>

        <hr className='c1 col-11.5 mhrshouldup' style={{ marginTop: '-50px' }} />

        <div className='notification-card'>
          <div className='title'>You don't have any applicants yet.</div>
          <div className='sub-title'>
            You can choose to cancel it or wait longer for interpreters to apply. (The amount will be refunded back to your preferred
            source)
          </div>
          <div className='refund-text'>Read Refund Policy</div>
          <div className='buttons-container'>
            <button className='addMeetingLinkBtn' style={{ margin: '0' }}>
              <b>No, I'll wait</b>
            </button>
            <div>
              <button className='addMeetingLinkBtn' style={{ margin: '0' }}>
                <b>Cancel Job</b>
              </button>
            </div>
          </div>
        </div>

        <hr className='c1 col-11.5 mhrshouldup' style={{ marginTop: '25px' }} />

        <div
          style={{
            // background: "red",
            margin: '30px 0px 10px 0px',
          }}
        >
          <div className=' ml-12 floatleft mt-24'>
            <div className=' displayflex'>
              <span>
                No. of Applicants: <span className='colorPink'>12</span>
              </span>
              <span style={{ marginLeft: '50px' }}>
                Short-Listed: <span className='colorPink'>1</span>
              </span>
              <span style={{ marginLeft: '50px' }}>
                Negotiating: <span className='colorPink'>3</span>
              </span>
            </div>
          </div>
          {/* short listed applicants */}
          <div className=' ml-12 floatleft mt-24'>
            <span className='colorWhite'>Short-Listed Applicants</span>
          </div>

          {/* Name */}
          <div className=' ml-12 floatleft mt-24'>
            <span className='colorWhite displayflex'>
              # <span style={{ marginLeft: '30px' }}>Name</span>
            </span>
            <span className='colorWhite displayflex'>
              <span style={{ marginLeft: '30px' }}>Rating</span>
            </span>
          </div>
          {/* short listed applicants */}
         <div className=" ml-12 floatleft mt-24">
            <span className="colorWhite displayflex">
              <span className="floatleft">
                1
                <span style={{ marginLeft: "40px" }} className=" displayflex">
                  <span className="colorPink " style={{ float: "left" }}>
                    <span style={{ float: "left" }}>Vidhyth Sharma</span>
                    <img
                      className="infoicon leftarrow "
                      src={protectedshield}
                      alt="protectedshield"
                      style={{ float: "left", width: "25px" }}
                    />
                    <span style={{ color: "white" }}>Certified</span>
                  </span>
                </span>
              </span>
            </span>
            <span className="colorWhite displayflex">
              <span style={{ marginLeft: "40px" }}>
                <span className="colorPink">
                  <StarBorder
                    style={{ color: "#24e5af", margin: "-10px 0px 0px -12px" }}
                  />
                </span>
                4.8
              </span>
            </span>
          </div>

    
          {/* Normal Application */}
          <div className=' ml-12 floatleft mt-24'>
            <span className='colorWhite displayflex'>Normal Application</span>
          </div>

          {/* card has to be shown here */}
          <div className=' ml-12 floatleft mt-24'>
            <NormalApplication />
          </div>

          {/* Normal Application */}
          <div className=' ml-12 floatleft' style={{ marginTop: '50px' }}>
            <span className='colorWhite displayflex'>Negotiating Applicants</span>
          </div>

          {/* card has to be shown here */}
          <div className=' ml-12 floatleft mt-24'>
            <NogiationApplicationCard />
          </div>

          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default FullViewMeetingDetails;
