import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Navbar from "../Navbar/Navbar";

import ReactModal from "react-responsive-modal";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";

import "./completed.css";

const Completed = () => {
  const [initiatePayment, setinitiatePayment] = useState(false);
  const [steps, setSteps] = useState(1);

  return (
    <div
      className="col-10 ml-auto c0 p-0"
      style={{
        Width: "44.271vw",
        position: "relative",
      }}
    >
      <Navbar title={"Completed"} />

      <div
        style={{
          position: "absolute",
          left: "25%",
          top: "200%",
          textAlign: "center",
        }}
      >
        <img
          style={{ width: "25em", margin: "2em auto" }}
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Selection_re_poer.svg"
          alt=""
        />
        <p>No messages to show yet. We will keep you posted!</p>
      </div>

      <div className="row">
        <div className="col-12 d-flex mt-4 ml-3 sort-dropdown">
          <p className="mt-2">Sort :</p>
          <select className="ml-2">
            <option value="">Most recent First</option>
            <option value="">Older First</option>
          </select>
        </div>
      </div>

      {/* this will be shown when some one cliks on the initiate button */}
      {initiatePayment === true && (
        <ReactModal
          open={initiatePayment === true}
          onClose={() => {
            setinitiatePayment(false);
            setSteps(1);
          }}
          classNames={{
            modal: "Step1Model",
          }}
          center
        >
          {steps === 1 ? (
            <Step1 setSteps={setSteps} />
          ) : steps === 2 ? (
            <Step2 setSteps={setSteps} />
          ) : (
            steps === 3 && <Step3 setSteps={setSteps} />
          )}
        </ReactModal>
      )}
      <div className="row">
        <div className="col-12">
          <div className="card p-3 m-4">
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <div className="col left-title mb-2">
                    <p style={{ color: "white" }}>
                      Apollo Hospital -
                      <span style={{ color: "#54ACF0" }}> Onsite</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col left-body">
                    <p className="m-0"> Sarjapur Road, Bengaluru, Karnataka </p>
                    <p className="m-0"> 04/06/2020 at 04.39 PM </p>

                    <button
                      className="InitiatePaymentbtn"
                      onClick={() => setinitiatePayment(true)}
                    >
                      Initiate Payment
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="row">
                  <div className="col d-flex">
                    <Divider
                      variant="middle"
                      orientation="vertical"
                      flexItem
                      style={{
                        background: "white",
                        height: "100px",
                      }}
                    />
                    <div>
                      <StarBorderIcon
                        style={{
                          color: "#24E1AC",
                          marginTop: "1.5rem",
                        }}
                      />
                      <br /> 4.5
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col">
                    <p className="m-0 pb-2 right-body">
                      Quality Services , Very Professional and arrived on Time ,
                      Happy with the assistance.
                    </p>
                    <p className="m-0 pb-2">-Asif Mohammed( Receptionist )</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-3 m-4">
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <div className="col left-title mb-2">
                    <p style={{ color: "white" }}>
                      Neso Hospital -
                      <span style={{ color: "#54ACF0" }}> Remote</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col left-body">
                    <p className="m-0"> Sarjapur Road, Bengaluru, Karnataka </p>
                    <p className="m-0"> 04/06/2020 at 04.39 PM </p>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="row">
                  <div className="col d-flex">
                    <Divider
                      variant="middle"
                      orientation="vertical"
                      flexItem
                      style={{
                        background: "white",
                        // marginLeft: "2rem",
                        height: "100px",
                        // marginTop: ".8rem",
                      }}
                    />
                    <div>
                      <StarBorderIcon
                        style={{
                          color: "#FA9E71",
                          marginTop: "1.5rem",
                        }}
                      />
                      <br /> 2.5
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col">
                    <p className="m-0 pb-2 right-body">
                      Quality Services , Very Professional and arrived on Time ,
                      Happy with the assistance.
                    </p>
                    <p className="m-0 pb-2">-Asif Mohammed( Receptionist )</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-3 m-4">
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <div className="col left-title mb-2">
                    <p style={{ color: "white" }}>
                      Sum Hospital -
                      <span style={{ color: "#54ACF0" }}> Remote</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col left-body">
                    <p className="m-0"> Sarjapur Road, Bengaluru, Karnataka </p>
                    <p className="m-0"> 04/06/2020 at 04.39 PM </p>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="row">
                  <div className="col d-flex">
                    <Divider
                      variant="middle"
                      orientation="vertical"
                      flexItem
                      style={{
                        background: "white",
                        // marginLeft: "2rem",
                        height: "100px",
                        // marginTop: ".8rem",
                      }}
                    />
                    <div>
                      <StarBorderIcon
                        style={{
                          color: "#FDA072",
                          marginTop: "1.5rem",
                        }}
                      />
                      <br /> 3.5
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col">
                    <p className="m-0 pb-2 right-body">
                      Quality Services , Very Professional and arrived on Time ,
                      Happy with the assistance.
                    </p>
                    <p className="m-0 pb-2">-Asif Mohammed( Receptionist )</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-3 m-4">
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <div className="col left-title mb-2">
                    <p style={{ color: "white" }}>
                      Neso Hospital -
                      <span style={{ color: "#54ACF0" }}> Onsite</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col left-body">
                    <p className="m-0"> Sarjapur Road, Bengaluru, Karnataka </p>
                    <p className="m-0"> 04/06/2020 at 04.39 PM </p>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="row">
                  <div className="col d-flex">
                    <Divider
                      variant="middle"
                      orientation="vertical"
                      flexItem
                      style={{
                        background: "white",
                        // marginLeft: "2rem",
                        height: "100px",
                        // marginTop: ".8rem",
                      }}
                    />
                    <div>
                      <StarBorderIcon
                        style={{
                          color: "#FE6171",
                          marginTop: "1.5rem",
                        }}
                      />
                      <br /> 1.5
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col">
                    <p className="m-0 pb-2 right-body">
                      Quality Services , Very Professional and arrived on Time ,
                      Happy with the assistance.
                    </p>
                    <p className="m-0 pb-2">-Asif Mohammed( Receptionist )</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-3 m-4">
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <div className="col left-title mb-2">
                    <p style={{ color: "white" }}>
                      Neso Hospital -
                      <span style={{ color: "#54ACF0" }}> Onsite</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col left-body">
                    <p className="m-0"> Sarjapur Road, Bengaluru, Karnataka </p>
                    <p className="m-0"> 04/06/2020 at 04.39 PM </p>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="row">
                  <div className="col d-flex">
                    <Divider
                      variant="middle"
                      orientation="vertical"
                      flexItem
                      style={{
                        background: "white",
                        height: "100px",
                      }}
                    />
                    <div>
                      <StarBorderIcon
                        style={{
                          color: "#E19068",
                          marginTop: "1.5rem",
                        }}
                      />
                      <br /> 3.5
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col">
                    <p className="m-0 pb-2 right-body">
                      Quality Services , Very Professional and arrived on Time ,
                      Happy with the assistance.
                    </p>
                    <p className="m-0 pb-2">-Asif Mohammed( Receptionist )</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
