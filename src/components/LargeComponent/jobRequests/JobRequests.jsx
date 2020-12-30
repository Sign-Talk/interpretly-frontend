import React, { useState, useEffect } from "react";
import { Bell } from "react-feather";

import "./jobRequests.css";
import DetailsRoundedIcon from "@material-ui/icons/DetailsRounded";
import FullViewjobRequest from "./FullViewjobRequest";
import JobCard from "./JobCard";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import Card from "../Notification/Card";

let icon = require("../../../assets/images/message.svg");

const JobRequests = ({ history }) => {
  const [DisplayDropdown, setDisplayDropdown] = useState(false);
  const [DisplayNotification, setDisplayNotification] = useState(false);
  const [data, setData] = useState([]);
  const [JobData, setJobData] = useState([]);

  const [ViewFullJobDetails, setViewFullJobDetails] = useState(false);

  const HandleDisplyDropdown = () => {
    if (DisplayDropdown) {
      setDisplayDropdown(false);
    } else {
      setDisplayDropdown(true);
    }
  };

  const HandleShowNotification = () => {
    if (DisplayNotification) {
      setDisplayNotification(false);
    } else {
      setDisplayNotification(true);
    }
  };
  // fetch db
  const getData = () => {
    fetch("notificationDummyData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  // fetch upcomming job db
  const FetchJobJson = () => {
    fetch("UpcommingJobData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log("myjson ", myJson);
        setJobData(myJson);
      });
  };

  const FullViewFunc = () => {
    console.log("clicked");
    setViewFullJobDetails(true);
  };

  useEffect(() => {
    getData();
    FetchJobJson();

    window.onclick = function (event) {
      if (!event.target.matches(".sowthedic")) {
        setDisplayDropdown(false);
      }
      if (!event.target.matches(".HandleShowNotification")) {
        setDisplayNotification(false);
      }
    };
  }, []);
  return (
    <div
      className="col-10 ml-auto c0 p-0"
      style={{
        Width: "44.271vw",
        position: "relative",
      }}
    >
      <div
        className="col-12 pl-3 pt-3 p-0 pb-5"
        style={{
          height: "80px",
          position: "sticky",
          top: 0,
          boxShadow: "0px 5px 15px black",
        }}
      >
        <h3 className="fo1 font-weight-light h3Forprofile">Job Requests</h3>

        <div
          className="rounded-circle p-2 c4 bellIcon HandleShowNotification"
          onClick={HandleShowNotification}
        >
          <Bell />
        </div>

        {/* // {{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}} */}
        {DisplayNotification && (
          <div className="col-6" style={{ position: "absolute", right: "0px" }}>
            <div className=" col-12 mt-4 container text-center"></div>
            <div
              className="col-12 mt-4"
              style={{ maxHeight: "400px", overflow: "scroll" }}
            >
              <div className="col-12 m-auto d-flex justify-content-between p-0">
                <div className="col text-center">
                  <h4>Notification</h4>
                </div>
              </div>
              {
                // {{{{{{{{{{{{{{{{{{{{ if 0 data in db }}}}}}}}}}}}}}}}}}}}

                data && data.length === 0 ? (
                  <div
                    className="col text-center"
                    style={{
                      dipslay: "absolute",
                      top: "10%",
                      left: "25%",
                    }}
                  >
                    <img
                      className="notification"
                      style={{ margin: "2em 0" }}
                      src={icon}
                      alt="notifiaction"
                    />
                    <p className="notification" style={{ margin: 0 }}>
                      You Do not have any Notifications yet!
                    </p>
                  </div>
                ) : (
                  data.map((data, i) => (
                    // {{{{{{{{{{{{{{{{{{{{ if any data in db }}}}}}}}}}}}}}}}}}}}

                    <Card
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      message={data.message}
                      image={data.image}
                    />
                  ))
                )
              }
            </div>
          </div>
        )}
        {/* // {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}

        <div className="NavDropDown sowthedic" onClick={HandleDisplyDropdown}>
          <div className="NavDropDownchild sowthedic">
            <div
              style={{
                position: "absolute",
                top: "50%",
                fontSize: "16px",
                transform: "translate(25px, -50%)",
              }}
              className="sowthedic"
            >
              Neo Ho..
            </div>
            <div className="NavDropDownchild2 sowthedic">
              <DetailsRoundedIcon className="DetailsRoundedIcon sowthedic" />
            </div>
          </div>
        </div>

        {DisplayDropdown && (
          <ul className="dropdownMenu">
            <li className="dropdownMenuli">Open Profile</li>
            <li className="dropdownMenuli">Account Setting</li>
            <li className="dropdownMenuli">Privacy Policy</li>
            <li
              className="dropdownMenuli"
              onClick={() => {
                localStorage.removeItem("token");
                history.push("/interpretly");
              }}
            >
              Log Out
            </li>
          </ul>
        )}
      </div>
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
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/empty_xct9.svg"
          alt=""
        />
        <p>You have no job requests yet, but we will keep you informed !</p>
      </div>

      {ViewFullJobDetails ? (
        <>
          <div
            style={{
              cursor: "pointer",
              marginLeft: "100px",
              marginTop: "30px",
              height: "40px",
              width: "40px",
              borderRadius: "50%",
            }}
            onClick={() => setViewFullJobDetails(false)}
          >
            <ArrowBackIosIcon />
          </div>
          <FullViewjobRequest />
        </>
      ) : (
        <div className="row pl-5 pr-5 pt-4 job-section">
          <div className="col-12">
            <div className="row pb-4">
              <div className="col-8">
                <h4 className="p-0 mb-2">Posted jobs</h4>
                <div className="filter-section-btns d-flex">
                  <p>Quick Filter :</p>
                  <span>
                    <button className="btn ml-2">Onsite</button>
                    <button className="btn ml-2">Remote</button>
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    {/* ====================== */}

                    {JobData.length > 0 &&
                      JobData.map((data) => (
                        <JobCard
                          FullViewFunc={FullViewFunc}
                          key={data.id}
                          id={data.id}
                          title={data.title}
                          type={data.type}
                          timeStamp={data.timeStamp}
                          address={data.address}
                          btntype={data.btntype}
                          price={data.price}
                          requirement={data.requirement}
                          period={data.period}
                        />
                      ))}

                    {/* ================== */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobRequests;
