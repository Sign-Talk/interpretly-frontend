import React from "react";
import protectedshield from "../../assets/images/protecctedshield.svg";
import leftarraow from "../../assets/images/left arrow.svg";
import rightarrow from "../../assets/images/right arrow.svg";
import { StarBorder } from "@material-ui/icons";

const NogiationApplicationCard = () => {
  return (
    <div className="NormalApplication ">
      <div className=" ml-12 floatleft mt-24">
        <span className="colorWhite displayflex">
          # <span style={{ marginLeft: "30px" }}>Name</span>
        </span>
        <span className="colorWhite displayflex">
          <span style={{ marginLeft: "-8px" }}>
            Rating
            <span></span>
          </span>
        </span>
      </div>
      {/* 01 */}
      <div className="floatleft mt-24">
        <div className="displayflex2">
          <span className="floatleft" style={{ marginLeft: "13px" }}>
            1
            <span style={{ marginLeft: "40px" }} className=" displayflex">
              <span className="colorPink ">Vidhyth Sharma </span>
            </span>
            <span className="displayflex">
              <span className="floatleft" style={{ marginLeft: "-110px" }}>
                <span className="displayflex">
                  <img
                    className="infoicon "
                    // width={20}
                    src={protectedshield}
                    alt="protectedshield"
                  />
                </span>
                <span className="displayflex" style={{ marginLeft: "-260px" }}>
                  Certified
                </span>
              </span>
            </span>
          </span>
        </div>
        {/* 2nd part side by side */}
        <div className="displayflex">
          <span className="colorWhite displayflex">
            <span style={{ marginLeft: "10px" }}>
              <span className="colorPink">
                <StarBorder
                  style={{ color: "#24e5af", margin: "-10px 0px 0px -12px" }}
                />
              </span>
              4.8
            </span>
          </span>
        </div>
        {/* 3nd part side by side */}
        <div className="displayflex">
          <div className="floatleft">
            <div className="displayflex ">
              <span className="AcceptBtn">
                <b>Accept</b>
              </span>
            </div>
            <div
              className="displayflex"
              style={{
                marginLeft: "50px",
                marginTop: "-14px",
              }}
            >
              <h5 className="font-weight-light SendFinalPrice">
                <b>Send Final Price</b>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* 02 */}
      <div className="floatleft mt-24">
        <div className="displayflex2">
          <span className="floatleft" style={{ marginLeft: "13px" }}>
            1
            <span style={{ marginLeft: "40px" }} className=" displayflex">
              <span className="colorPink "> Ashwanth</span>
            </span>
          </span>
        </div>
        {/* 2nd part side by side */}
        <div className="displayflex">
          <span className="colorWhite displayflex">
            <span style={{ marginLeft: "10px" }}>
              <span className="colorPink">
                <StarBorder
                  style={{ color: "#24e5af", margin: "-10px 0px 0px -12px" }}
                />
              </span>
              4.8
            </span>
          </span>
        </div>
        {/* 3nd part side by side */}
        <div className="displayflex">
          <div className="floatleft">
            <div className="displayflex ">
              <span className="AcceptBtn">
                <b>Accept</b>
              </span>
            </div>
            <div
              className="displayflex"
              style={{
                marginLeft: "50px",
                marginTop: "-14px",
              }}
            >
              <h5 className="font-weight-light SendFinalPrice">
                <b>Send Final Price</b>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* 03 */}
      <div className="floatleft mt-24">
        <div className="displayflex2">
          <span className="floatleft" style={{ marginLeft: "13px" }}>
            1
            <span style={{ marginLeft: "40px" }} className=" displayflex">
              <span className="colorPink ">Chandan Sharma</span>
            </span>
            <span className="displayflex">
              <span className="floatleft" style={{ marginLeft: "-110px" }}>
                <span className="displayflex">
                  <img
                    className="infoicon "
                    // width={20}
                    src={protectedshield}
                    alt="protectedshield"
                  />
                </span>
                <span className="displayflex" style={{ marginLeft: "-260px" }}>
                  Certified
                </span>
              </span>
            </span>
          </span>
        </div>
        {/* 2nd part side by side */}
        <div className="displayflex">
          <span className="colorWhite displayflex">
            <span style={{ marginLeft: "10px" }}>
              <span className="colorPink">
                <StarBorder
                  style={{ color: "#24e5af", margin: "-10px 0px 0px -12px" }}
                />
              </span>
              4.8
            </span>
          </span>
        </div>
        {/* 3nd part side by side */}
        <div className="displayflex">
          <div className="floatleft">
            <div className="displayflex ">
              <span className="AcceptBtn">
                <b>Accept</b>
              </span>
            </div>
            <div
              className="displayflex"
              style={{
                marginLeft: "50px",
                marginTop: "-14px",
              }}
            >
              <h5 className="font-weight-light SendFinalPrice">
                <b>Send Final Price</b>
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* pagination */}
      <div
        className="pagination floatleft"
        style={{ margin: "50px 0px 30px 0px" }}
      >
        <div className="infoicon displayflex2"></div>
        <div className="infoicon displayflex"></div>
        <img
          className="infoicon displayflex"
          src={leftarraow}
          alt="leftarrow"
        />
        <span className=" displayflex  cursor">
          {" "}
          <p className="backblue"> 1</p>
        </span>
        <span className=" displayflex cursor">2</span>
        <span className=" displayflex cursor">3</span>
        <span className=" displayflex cursor">4</span>
        <span className=" displayflex cursor">5</span>
        <img
          className=" displayflex cursor"
          style={{ marginLeft: "-60px" }}
          src={rightarrow}
          alt="rightarrow"
        />
        <div className="infoicon displayflex"></div>
        <div className="infoicon displayflex2"></div>
      </div>
    </div>
  );
};

export default NogiationApplicationCard;
