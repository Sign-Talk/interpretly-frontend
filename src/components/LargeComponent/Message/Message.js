import React from "react";
import classes from "./Message.module.css";
import { withRouter, useHistory } from "react-router-dom";

import { Bell, Power } from "react-feather";
let icon = require("../../../assets/images/message.svg");

function Message({ history, ...props }) {
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
          <h3 className="d-inline fo1 font-weight-light">Messages</h3>
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
        <div className="col m-5">
          <img className={classes.message} src={icon} alt="Messaage" />
          <p className={classes.message}>You Do not have Message!</p>
        </div>
      </div>
    </>
  );
}

export default Message;
