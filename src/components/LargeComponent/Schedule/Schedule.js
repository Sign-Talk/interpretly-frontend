import React from "react";
import Calendar from "react-calendar";
import { withRouter, useHistory } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import { Bell, Power } from "react-feather";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Divider from "@material-ui/core/Divider";
import "./Schedule.module.css";
import "react-calendar/dist/Calendar.css";
function Schedule({ history, ...props }) {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <>
      <div className="col-10 ml-auto c0 p-0" style={{ minWidth: "850px" }}>
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
          <h3 className="d-inline fo1 font-weight-light">Shedule</h3>
          <div className="mr-3 rounded-circle p-2 c4 float-right text-light">
            <Bell />
          </div>
          <div className="mr-3 rounded-circle p-2 c4 float-right text-light">
            <Power
              onClick={() => {
                localStorage.removeItem("token");
                props.history.push("/interpretly");
              }}
            />
          </div>
        </div>

        <div className="col-12 pb-5 m-5">
          <div className="col-12 row m-auto">
            <div className="col-6">
              <div className="col-12 m-auto d-flex justify-content-between p-0">
                <div className="col text-left">
                  <h4>This Month</h4>
                </div>
                <div className="col text-right">
                  <h4 className="co">Expand &gt;</h4>
                </div>
              </div>
              <Calendar
                style={{ width: "500px" }}
                className="col-11 mr-auto mt-4 ml-auto p-3 c5 round"
              />
            </div>
            <div className="col-6">
              <div className="col-12 m-auto d-flex justify-content-between p-0">
                <div className="col text-left">
                  <h4>16 NOV .</h4>
                </div>
                <div className="col">
                  <h4>Appointments</h4>
                </div>
                <div className="col text-right">
                  <h4 className="co">See all &gt;</h4>
                </div>
              </div>
              {arr.map((item) => (
                <div className=" row p-3 c5 col-12 round mb-2">
                  <div className="col-4">
                    <p className="d-inilne m-0 p-0" style={{ color: "#fff" }}>
                      10:30AM
                    </p>
                    <p className="d-inilne m-0 p-0">(3 Hours)</p>{" "}
                    <span className="co m-2">Onsite</span>{" "}
                  </div>
                  <div className="col-1">
                    <Divider
                      variant="middle"
                      orientation="vertical"
                      flexItem
                      style={{
                        background: "white",
                        marginLeft: "0rem",
                        height: "50px",
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
      </div>
    </>
  );
}

export default withRouter(Schedule);
