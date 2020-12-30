import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { withRouter } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import { Bell } from "react-feather";
import Card from "../Notification/Card";
import Divider from "@material-ui/core/Divider";
import DetailsRoundedIcon from "@material-ui/icons/DetailsRounded";
import "./Schedule.module.css";
import "react-calendar/dist/Calendar.css";
let icon = require("../../../assets/images/message.svg");

function Schedule({ history }) {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1];

  const [DisplayDropdown, setDisplayDropdown] = useState(false);
  const [DisplayNotification, setDisplayNotification] = useState(false);
  const [data, setData] = useState([]);

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

  useEffect(() => {
    getData();

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
    <>
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
            boxShadow: "0px 5px 15px black",
            position: "sticky",
            top: "0px",
            right: "0px",
          }}
        >
          <h3 className="fo1 font-weight-light h3Forprofile">Schedule</h3>

          <div
            className="rounded-circle p-2 c4 bellIcon HandleShowNotification"
            onClick={HandleShowNotification}
          >
            <Bell />
          </div>

          {/* // {{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}} */}
          {DisplayNotification && (
            <div
              className="col-6"
              style={{ position: "absolute", right: "0px" }}
            >
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
          className="col-6"
          style={{
            position: "absolute",
            left: "3px",
            top: "200%",
          }}
        >
          <div className="col-12 m-auto d-flex justify-content-between p-0">
            <div className="col text-left">
              <h4>This Month</h4>
            </div>
            {/* <div className="col text-right">
                  <h4 className="co">Expand &gt;</h4>
                </div> */}
          </div>
          <Calendar
            style={{ width: "500px" }}
            className="col-12 mr-auto mt-4  p-3 c5 round w-100"
          />
        </div>
        <div
          className="col-6 ml=3"
          style={{
            position: "absolute",
            right: "3px",
            top: "200%",
          }}
        >
          <div className="col-12 d-flex justify-content-between p-0">
            <div className="col text-left">
              <h4>16 NOV .</h4>
            </div>
            <div className="col">
              <h4>Appointments</h4>
            </div>
            {/* <div className="col text-right">
                  <h4 className="co">See all &gt;</h4>
                </div> */}
          </div>
          <div
            className="col-12 mt-4"
            style={{ maxHeight: "600px", overflow: "scroll" }}
          >
            {arr.map((item) => (
              <div className=" col-12 row p-3 c5 col-10 round mb-2 ">
                <div className="col-4">
                  <p className="d-inilne m-0 p-2" style={{ color: "#fff" }}>
                    10:30AM
                  </p>
                  <p className="d-inilne p-2">(3 Hours)</p>{" "}
                  <span className="co ml-3 p-0">Onsite</span>{" "}
                </div>
                <div className="col-1">
                  <Divider
                    variant="middle"
                    orientation="vertical"
                    flexItem
                    style={{
                      background: "white",
                      marginLeft: "0rem",
                      height: "100px",
                      position: "absolute",
                      marginTop: "1rem",
                    }}
                  />
                </div>

                <div className="col-7">
                  <p className="d-inilne m-0 p-0" style={{ color: "#fff" }}>
                    State Bank Of India
                  </p>
                  <p className="f15 d-inline co1 ">
                    #769 GYR Chambur, Kaikondanahlli,sarjapur
                    Road,Bangalore,Karnataka
                  </p>
                  <p className="d-inilne m-0 p-0" style={{ color: "#fff" }}>
                    Language:
                    <span className="co m-2">English</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Schedule);
