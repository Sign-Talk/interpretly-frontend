import React from "react";
import classes from "./Notification.module.css";

import { Bell, Power } from "react-feather";
let icon = require("../../../assets/images/notification.svg");
function Notification({ history, ...props }) {
  let arr = Array(12);
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
          <h3 className="d-inline fo1 font-weight-light">Notifications</h3>
          <div className="mr-3 rounded-circle p-2 c4 float-right text-light">
            <Bell />
          </div>
          <div className="mr-3 rounded-circle p-2 c4 float-right text-light">
            <Power
              onClick={() => {
                localStorage.removeItem("token");
                history.push("/interpretly");
              }}
            />
          </div>
        </div>
        <div className="col text-center"
          style={{
            dipslay : 'absolute',
            top: '10%',
            left: '25%'
          }}
        >
          <img className={classes.notification} style={{ margin : '2em 0', }} src={icon} alt="notifiaction" />
          <p className={classes.notification} style={{ margin : 0}}>You Do not have any Notifications yet!</p>
        </div>
      </div>
    </>
  );
}

export default Notification;
