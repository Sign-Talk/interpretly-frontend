import React from "react";
import Divider from "@material-ui/core/Divider";
import "./FormTracker.css";

const FormTracker = ({ steps, setSteps }) => {
  return (
    <div className="form-tracker">
      <div className="sections">
        <button style={{ background: "none", outline: "none", border: "none" }}>
          <div style={{ background: "#7e21db" }} className="circle">
            1
          </div>
          <p style={{ color: "#ab57ff" }} className="step-name">
            Details
          </p>
        </button>
      </div>
      <Divider
        variant="middle"
        orientation="horizontal"
        flexItem
        className="divider"
        style={{
          background: steps !== 1 && "#ab57ff",
        }}
      />
      <div className="sections">
        <button style={{ background: "none", outline: "none", border: "none" }}>
          <div
            style={{
              background: steps !== 1 && "#7e21db",
            }}
            className="circle"
          >
            2
          </div>
          <p
            style={{
              color: steps !== 1 && "#ab57ff",
            }}
            className="step-name"
          >
            Schedule
          </p>
        </button>
      </div>
      <Divider
        variant="middle"
        orientation="horizontal"
        flexItem
        className="divider"
        style={{
          background: steps == 3 && "#ab57ff",
        }}
      />
      <div className="sections">
        <button style={{ background: "none", outline: "none", border: "none" }}>
          <div
            style={{
              background: steps == 3 && "#7e21db",
            }}
            className="circle"
          >
            3
          </div>
          <p
            style={{
              color: steps == 3 && "#ab57ff",
            }}
            className="step-name"
          >
            Confirm
          </p>
        </button>
      </div>
    </div>
  );
};

export default FormTracker;
