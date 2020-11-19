import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Axios from "axios";
import Modal from "react-modal";
import { Bell, Clock, UserPlus, CloudLightning ,Power} from "react-feather";
import { toast } from "react-toastify";
import Avatar from "react-avatar";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Dropdown } from "semantic-ui-react";
import Grid from "@material-ui/core/Grid";
import Spinner from "./dashboard/smallComponent/Spinner";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import { InputBase } from "@material-ui/core";
import { PopupComponent } from "../../components/elements/PopupComponent";

import "react-toastify/dist/ReactToastify.css";

import { Button, Segment, Form } from "semantic-ui-react";

const styleObject = { fontSize: "14px", color: "white" };

// these 3 variable is for drop down
const Reginset = [
  { key: 1, text: "Bangalore", value: 1 },
  { key: 2, text: "Delhi", value: 2 },
  { key: 3, text: "Mumbai", value: 3 },
  { key: 4, text: "Chennai", value: 4 },
  { key: 5, text: "Hydrabad", value: 5 },
  { key: 6, text: "Other", value: 6 },
];
const Backgroundset = [
  { key: 1, text: "Software", value: "Software" },
  { key: 2, text: "Education", value: "Education" },
  { key: 3, text: "Police", value: "Police" },
  { key: 4, text: "Healthcare", value: "Healthcare" },
  { key: 5, text: "Banking", value: "Banking" },
  { key: 6, text: "Energy", value: "Energy" },
  { key: 7, text: "Legal", value: "Legal" },
  { key: 8, text: "Media", value: "Media" },
  { key: 9, text: "Agriculture", value: "Agriculture" },
  { key: 10, text: "Technical", value: "Technical" },
  { key: 11, text: "Construction", value: "Construction" },
  { key: 12, text: "Other", value: "Other" },
];
const Languageset = [
  { key: 1, text: "English", value: "English" },
  { key: 2, text: "Hindi", value: "Hindi" },
  { key: 3, text: "Marathi", value: "Marathi" },
  { key: 4, text: "Bengali", value: "Bengali" },
  { key: 5, text: "Tamil", value: "Tamil" },
  { key: 6, text: "Malayalam", value: "Malayalam" },
  { key: 7, text: "Punjabi", value: "Punjabi" },
  { key: 8, text: "Kannada", value: "Kannada" },
];

export default function Profile(props) {
  const history = useHistory();

  const base = "https://whispering-lake-75400.herokuapp.com";

  let [profileimageModel, setprofileimageModel] = useState(false);
  const [file, setFile] = useState(null);
  let [language, setlanguage] = useState([]);
  let [Background, setBackground] = useState([]);
  let [region, setregion] = useState("");

  let [languageforgettingval, setlanguageforgettingval] = useState("");
  let [Backgroundforgettingval, setBackgroundforgettingval] = useState("");

  let [name, setName] = useState("");
  let [show, setShow] = useState("");
  let [email, setemail] = useState("");
  let [mobile, setmobile] = useState("");
  let [image, setimage] = useState("");

  const [loading, setLoading] = useState(false);

  const [showName, setshowName] = useState(false);
  const [showNumber, setshowNumber] = useState(false);
  const [showEmail, setshowEmail] = useState(false);
  const [showUploadcertificate, setshowUploadcertificate] = useState(false);

  const [div1per, setdiv1per] = useState(0);
  const [div2per, setdiv2per] = useState(0);
  const [div3per, setdiv3per] = useState(0);
  const [div4per, setdiv4per] = useState(0);
  const [Reviews, setReviews] = useState("");
  const [ProfilePic, setProfilePic] = useState("");

  const notify = (m) => {
    toast.success(m, {
      draggable: true,
      position: toast.POSITION.TOP_CENTER,
      zIndex: 1,

      autoClose: 20000,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;

    if (!token) {
      history.push("/interpretly");
      notify("you must be logged in");
    }
    if (decoded.exp < currentTime) {
      notify("login required");
      history.push("/interpretly");
    } else {
      async function func1() {
        setLoading(true);
        const { data } = await Axios({
          method: "get",
          url: `${base}/Home/profile`,
          headers: {
            token: token,
          },
        });

        setLoading(false);
        // console.log("user_data ", data);
        setlanguageforgettingval(data.user.language);
        setBackgroundforgettingval(data.user.Background);
        setemail(data.user.email);
        setimage(data.user.image);
        setmobile(data.user.mobile_no);
        setregion(data.user.region);
        setName(data.user.firstName + " " + data.user.lastName);

        // setdiv1per("4.8");
        // setdiv2per("4.2");
        // setdiv3per("3.2");
        // setdiv4per("89");
        // setReviews("72");
      }

      func1();
    }
  }, [history, ProfilePic]);

  // console.log(file);

  const handleChangeFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    let data = await Axios.post(`${base}/Home/dp`, formData, {
      headers: {
        "content-type": "multipart/form-data",
        token: localStorage.getItem("token"),
      },
    });
    setProfilePic(data);
    notify("upload done");
    setprofileimageModel(false);
    history.push("/interpretly/profile");

    // console.log(data);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    var res = name.split(" ");
    // console.log("splitted name ", res[0], res[1]);

    console.log("lang =====>>>>>>>>> ", language);
    console.log("Background =====>>>>>>>>> ", Background);
    try {
     let data= await Axios({
        method: "patch",
        url: `${base}/Home/profile`,
        data: {
          language: language,
          Background: Background,
          region: region,
          firstName: res[0],
          lastName: res[1],
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      if(data){
        setLoading(false);
      }

      notify("Profile Updated sucessfullly");
      setShow("");
      history.push("/interpretly/profile");

      // console.log(data);
    } catch (err) {
       console.log(err);
       setLoading(false);
    }
  };

  const handleChange1 = (e, data) => {
    let langStr = [];
    // console.log("e ====== >>>>> ", e);
    // console.log("data ====== >>>>> ", data);

    langStr.push(data.value);
    // console.log("langStr @@ ", langStr);

    langStr.map((data) => {
      setlanguage(data + ",");
      setlanguageforgettingval(data + ",");
      return null;
    });
  };

  const handleChange3 = async (e, data) => {
    let backgroundStr = [];

    backgroundStr.push(data.value);

    backgroundStr.map((data) => {
      setBackground(data + ",");
      setBackgroundforgettingval(data + ",");
      return null;
    });
  };

  const UploadImage = (e) => {
    e.preventDefault();
    setprofileimageModel(true);
  };

  let handleDisplay = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const ContentPic = () => (
    <>
      <div id="nobox" className="col-12 mb-5 " style={{ marginLeft: "30%" }}>
        {" "}
        Uplaod Your Profile Picture
      </div>
      <div id="nobox" className="col-12 " style={{ marginLeft: "30%" }}>
        {" "}
        <Form.Field>
          <input type="file" onChange={handleChangeFile} className="mb-3" />
          <Button type="submit" onClick={handleFileUpload}>
            Upload
          </Button>
        </Form.Field>
      </div>
    </>
  );

  return (
    <>
 
      <div
        className="col-10 ml-auto c0 p-0"
        style={{
          minWidth: "850px",
          position: "relative",
        }}
      >
        <Spinner loading={loading} />
        <div
          className="col-12 pl-3 pt-3 p-0 pb-5"
          style={{
            height: "80px",
            boxShadow: "0px 5px 15px black",
            position: "sticky",
            MarginTop: "0px",
            right: "0px",
          }}
        >
          <h3 className="d-inline fo1 font-weight-light">Profile</h3>
          <div className="mr-3 rounded-circle p-2 c4 float-right text-light">
            <Bell />
          </div>
          <div className='mr-3 rounded-circle p-2 c4 float-right text-light'>
            <Power 
            onClick={ () => {
              localStorage.removeItem('token');
              history.push('/interpretly')
            }}
            
            />
        </div>
        </div>
        {/* ================== <<<<<<<<< {{{{{ from here the user profile details are starting }}}}} >>>>>>>> ================== */}
        <div className="row p-0 m-0" style={{ fontSize: "14px" }}>
          <div
            style={{
              borderRadius: "50%",
              width: "8rem",
              marginTop: "1rem",
              marginLeft: "2rem",
            }}
          >
            <Avatar
              name={name}
              size="150"
              textSizeRatio={1.75}
              round={true}
              src={image}
            />
            <label
              style={{
                marginLeft: "6rem",
                zIndex: "+10",
              }}
              htmlFor="img"
            >
              <Fab
                onClick={UploadImage}
                style={{
                  marginTop: "-6rem",
                  width: "2rem",
                  height: "2rem",
                  position: "relative",
                }}
                color="secondary"
                aria-label="edit"
              >
                <EditIcon />
              </Fab>
            </label>
            <div
              className="col"
              style={{
                display: "inline-flex",
                fontSize: "16px",
                height: "30px",
              }}
            >
              <StarBorderIcon style={{ color: "#24e5af" }} />
              <b style={{ margin: "3px" }}> {div1per} / 5.0 </b>
            </div>
          </div>

          <div className="col-sm-9 p-4 mb-3" style={{ marginTop: "-1rem" }}>
            {show ? (
              <div style={{ lineHeight: "2.8rem", fontSize: "20px" }}>
                <span
                  style={{
                    color: "white",
                    fontSize: "30px",
                    textTransform: "capitalize",
                    position: "relative",
                    marginRight: "40px",
                  }}
                >
                  <b>{name}</b>
                </span>
                {showName === false ? (
                  <Link
                    to="#"
                    className="far fa-edit"
                    style={{ color: "#6aacdf" }}
                    onClick={() => setshowName(true)}
                  >
                    Edit Name
                  </Link>
                ) : (
                  <InputBase
                    placeholder="FirstName LastName"
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      background: "white",
                      borderRadius: "5px",
                      // padding: "10px",
                    }}
                  />
                )}
                {/* ==================== number ============================ */}

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    Phone No.
                  </Grid>

                  <Grid item xs={1} sm={1}>
                    :
                  </Grid>

                  <Grid item xs={12} sm={8}>
                    <div
                      className="col-12"
                      style={{ paddingTop: ".8rem", marginLeft: "-1rem" }}
                    >
                      <p className="m-0 mb-2 ">
                        <span style={styleObject}>
                          {mobile === "" ? "UnRegistered" : mobile}
                        </span>
                        <span style={{ marginLeft: ".8rem" }}>
                          {mobile === "" ? (
                            <CheckCircleOutlineOutlinedIcon
                              style={{ color: "red" }}
                            />
                          ) : (
                            <CheckCircleOutlineOutlinedIcon
                              style={{ color: "#24e5af" }}
                            />
                          )}
                        </span>
                        {showNumber === false ? (
                          <Link
                            to="#"
                            style={{
                              color: "#6aacdf",
                              marginLeft: "2rem",
                              fontSize: "14px",
                            }}
                            onClick={() => setshowNumber(true)}
                          >
                            Change Number
                          </Link>
                        ) : (
                          <InputBase
                            placeholder="Change Number"
                            onChange={(e) => setmobile(e.target.value)}
                            style={{
                              background: "white",
                              borderRadius: "5px",
                            }}
                          />
                        )}
                      </p>
                    </div>
                  </Grid>
                </Grid>
                {/* ==================== Email ============================ */}

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    Email
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    :
                  </Grid>

                  <Grid item xs={12} sm={8}>
                    <div
                      className="col-12"
                      style={{ paddingTop: ".8rem", marginLeft: "-1rem" }}
                    >
                      <p className="m-0 mb-2 ">
                        <span style={styleObject}>
                          {email === "" ? "no-email" : email}
                        </span>
                        <span style={{ marginLeft: ".8rem" }}>
                          {email === "" ? (
                            <CheckCircleOutlineOutlinedIcon
                              style={{ color: "red" }}
                            />
                          ) : (
                            <CheckCircleOutlineOutlinedIcon
                              style={{ color: "#24e5af" }}
                            />
                          )}
                        </span>
                        {showEmail === false ? (
                          <Link
                            to="#"
                            style={{
                              color: "#6aacdf",
                              marginLeft: "2rem",
                              fontSize: "14px",
                            }}
                            onClick={() => setshowEmail(true)}
                          >
                            Change Email
                          </Link>
                        ) : (
                          <InputBase
                            placeholder="Change Email"
                            onChange={(e) => setemail(e.target.value)}
                            style={{
                              background: "white",
                              borderRadius: "5px",
                            }}
                          />
                        )}
                      </p>
                    </div>
                  </Grid>
                </Grid>
                {/* ==================== Languages ============================ */}

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    Languages
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    :
                  </Grid>

                  <Grid item xs={12} sm={8}>
                    <div
                      id="dropdown"
                      style={{
                        display: show ? "block" : "none",
                        fontSize: "14px",
                      }}
                    >
                      <Dropdown
                        multiple
                        style={{ width: "15rem" }}
                        placeholder="update your Language"
                        selectOnBlur={false}
                        selection
                        search
                        size="20"
                        options={Languageset}
                        onChange={handleChange1}
                      />
                    </div>
                  </Grid>
                </Grid>
                {/* ==================== Region / Location ============================ */}

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    Location
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    :
                  </Grid>

                  <Grid item xs={12} sm={8}>
                    <div
                      id="dropdown"
                      style={{
                        display: show ? "block" : "none",
                        fontSize: "14px",
                      }}
                    >
                      <Dropdown
                        style={{ width: "15rem" }}
                        placeholder="update your region"
                        selectOnBlur={false}
                        selection
                        search
                        options={Reginset}
                        onChange={(e) => setregion(e.target.textContent)}
                      />
                    </div>
                  </Grid>
                </Grid>
                {/* ==================== Background ============================ */}

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    Background
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    :
                  </Grid>

                  <Grid item xs={12} sm={8}>
                    <div
                      id="dropdown"
                      style={{
                        display: show ? "block" : "none",

                        fontSize: "14px",
                      }}
                    >
                      <Dropdown
                        multiple
                        style={{ width: "15rem" }}
                        placeholder="update your Background"
                        selectOnBlur={false}
                        selection
                        search
                        options={Backgroundset}
                        onChange={handleChange3}
                      />
                    </div>
                  </Grid>
                </Grid>
                {/* ==================== Upload Certificate ============================ */}

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    Upload Certificate
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    :
                  </Grid>

                  <Grid item xs={12} sm={8}>
                    {showUploadcertificate === false ? (
                      <Link
                        to="#"
                        style={{
                          color: "#6aacdf",
                          fontSize: "18px",
                        }}
                        onClick={() => setshowUploadcertificate(true)}
                      >
                        Browse File
                      </Link>
                    ) : (
                      <InputBase
                        placeholder="Browse File"
                        type="file"
                        onChange={handleChangeFile}
                        style={{
                          background: "white",
                          borderRadius: "5px",
                        }}
                      />
                    )}
                  </Grid>
                </Grid>
              </div>
            ) : (
              <>
                <p
                  style={{
                    color: "white",
                    fontSize: "30px",
                    textTransform: "capitalize",
                  }}
                >
                  <b>{name}</b>
                </p>

                {/* ======================= {{{{{{{{{{{{{{ class = row }}}}}}}}}}}}}} ======================= */}

                <div className="row" style={{ marginLeft: ".5rem" }}>
                  {/* ======================= {{{{{{{{{{{{{{ 1st col of row }}}}}}}}}}}}}} ======================= */}

                  <div className="col-6">
                    <div className="row">
                      <div className="col-4">
                        <p className="m-0 mb-4 " id="marginleft4">
                          Mobile :
                        </p>
                        <p className="m-0 mb-4 " id="marginleft4">
                          Email :
                        </p>
                        <p className="m-0 mb-4 " id="marginleft4">
                          Language :
                        </p>
                      </div>
                      <div className="col-8">
                        <p className="m-0 mb-2 " id="marginleft3">
                          <span style={styleObject}>
                            {mobile === "" ? "Registered" : mobile}
                          </span>
                          {mobile === "" ? (
                            <CheckCircleOutlineOutlinedIcon
                              style={{ color: "red" }}
                            />
                          ) : (
                            <CheckCircleOutlineOutlinedIcon
                              style={{ color: "#24e5af" }}
                            />
                          )}
                        </p>
                        <p className="m-0 mb-3 " id="marginleft3">
                          <span style={styleObject}>
                            {email === "" ? "no-email" :email.search('@') == "-1" ?"Social Login":email }
                          </span>
                          {email === "" ? (
                            <CheckCircleOutlineOutlinedIcon
                              style={{ color: "red" }}
                            />
                          ) : (
                            <CheckCircleOutlineOutlinedIcon
                              style={{ color: "#24e5af" }}
                            />
                          )}
                        </p>

                        <div className="m-0 mb-3" id="marginleft3">
                          <span style={styleObject}>
                            {languageforgettingval.length === 0
                              ? "update your Language"
                              : languageforgettingval}
                          </span>
                          {/* )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ======================= {{{{{{{{{{{{{{ 2st col of row }}}}}}}}}}}}}} ======================= */}
                  <div className="col-6">
                    <div className="row">
                      <div className="col-4">
                        <p className="m-0 mb-4 " id="marginleft4">
                          Location :
                        </p>
                        <p className="m-0 mb-4 " id="marginleft4">
                          Background :
                        </p>
                      </div>
                      <div className="col-sm-8">
                        <div className="m-0 mb-3 " id="marginleft3">
                          <span style={styleObject}>
                            {region === "" ? "update your region" : region}
                          </span>
                          {/* )} */}
                        </div>
                        <div className="m-0 mb-3" id="marginleft3">
                          <span style={styleObject}>
                            {Backgroundforgettingval.length === 0
                              ? "update your Background"
                              : Backgroundforgettingval}
                          </span>
                          {/* )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ================== <<<<<<<<< {{{{{ End Of user profile details  }}}}} >>>>>>>> ================== */}

        <div className="row p-3 text-center ">
          {show ? (
            <></>
          ) : (
            <>
              <Link
                to="#"
                className="far fa-edit"
                style={{
                  color: "#6aacdf",
                  left: "75%",
                  marginTop: "-14rem",
                  position: "absolute",
                }}
                onClick={handleDisplay}
              >
                Edit Details
              </Link>
            </>
          )}

          <Grid container spacing={2} style={{ marginTop: "-3rem" }}>
            <Grid item xs={12} sm={4}>
              <Button
                inverted
                color="blue"
                onClick={handleSave}
                style={{
                  background: "#54acf0",
                  color: "white",
                  float: "right",
                  outline: "none",
                  display: show ? "block" : "none",
                }}
              >
                Save Changes
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                inverted
                color="blue"
                onMouseEnter={(e) => (e.target.style.background = "#54acf0")}
                onMouseLeave={(e) => (e.target.style.background = "")}
                onClick={handleDisplay}
                style={{
                  color: "white",
                  border: "#54acf0",

                  display: show ? "block" : "none",
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </div>

        <PopupComponent
          modalState={profileimageModel}
          setmodalState={setprofileimageModel}
          Content={ContentPic()}
        />
       

        {/* ================== <<<<<<<<< {{{{{ End of Editible code responsible because of this code   }}}}} >>>>>>>> ================== */}

        {/* ====================== Rating sestion ==============  */}
        <Divider
          variant="middle"
          style={{ height: "1px", background: "grey", margin: '2em' }}
        />

        <div className="col-12 ">
          <h4 style={{ marginLeft: "3rem" }}>Rating</h4>
          <div className="row" style={{ marginLeft: "5.5rem", textAlign: 'center' }}>
            <div
              className="col-2"
              style={{
                background: "#272727",
                height: "160px",
                paddingTop: "1.5rem",
                alignItems: "center",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <div className="col" style={{
                position: "relative",
                height : '3em'
              }}>
                <Clock
                  size="50"
                  color={"white"}
                  style={{ position : 'absolute', left : '35%', top : 0}}
                />
              </div>
              <div className="col">On-Time</div>
              <div className="col">
                <span style={{ color: "#24e5af" }}>{div1per}</span> / 5.0
              </div>
            </div>
            <div
              className="col-2"
              style={{
                background: "#272727",
                height: "160px",
                padding: "1.5rem",
                borderRadius: "10px",
                textAlign: "center",
                marginLeft: "1rem",
              }}
            >
              <div className="col"style={{
                position: "relative",
                height : '3em'
              }}>
                <UserPlus
                  size="50"
                  color={"white"}
                  style={{ position : 'absolute', left : '35%', top : 0}}
                />
              </div>
              <div className="col">Attitude</div>
              <div className="col">
                <span style={{ color: "#24e5af" }}>{div2per}</span> / 5.0
              </div>
            </div>
            <div
              className="col-2"
              style={{
                background: "#272727",
                height: "160px",
                padding: "1.5rem",
                borderRadius: "10px",
                textAlign: "center",
                marginLeft: "1rem",
              }}
            >
              <div className="col"style={{
                position: "relative",
                height : '3em'
              }}>
                <CloudLightning
                  size="50"
                  color={"white"}
                  style={{ position : 'absolute', left : '35%', top : 0}}
                />
              </div>
              <div className="col">Quality</div>
              <div className="col">
                <span style={{ color: "#ffa173" }}> {div3per} </span> / 5.0
              </div>
            </div>

            <Divider
              variant="middle"
              orientation="vertical"
              flexItem
              style={{ background: "white", marginLeft: "2rem" }}
            />

            <div
              className="col-3"
              style={{
                background: "#272727",
                height: "160px",
                padding: "1rem",
                borderRadius: "10px",
                textAlign: "center",
                marginLeft: "1rem",
              }}
            >
              <div className="col">
                <h1 style={{ color: "#24e5af" }}>{div4per} %</h1>
              </div>
              <div className="col">Recommended By</div>
              {/* <div className="col"> ( {Reviews} reviews)</div> */}
            </div>
          </div>
        </div>
        {/* ====================== feedback sestion ==============  */}
        

        {/* <div className="col-12 p-3 mb-5 ">
          <h4 style={{ marginLeft: "3rem" }}>Feedback</h4>
          <div className="col-12">
            <div
              className="row"
              style={{
                background: "#272727",
                borderRadius: "10px",
                paddingTop: "2rem",
              }}
            >
              <div
                className="col-4"
                style={{
                  height: "160px",

                  borderRadius: "10px",
                }}
              >
                <div className="col">
                  <b style={{ color: "white" }}> Appolo Hospital - </b>
                  <span style={{ color: "#54acf0" }}>Onsite</span>
                </div>
                <div className="col">Sarjapur Road, Bengaluru, Karnataka</div>
                <div className="col">04/06/2020 at 04.39 PM</div>
              </div>

              <Divider
                variant="middle"
                orientation="vertical"
                flexItem
                style={{
                  background: "white",
                  marginLeft: "2rem",
                  height: "100px",
                  marginTop: ".8rem",
                }}
              />
              <div>
                <StarBorderIcon
                  style={{ color: "#24e5af", marginTop: "1.5rem" }}
                />
                <br /> 4.5
              </div>

              <div
                className="col-6"
                style={{
                  background: "#272727",
                  height: "160px",

                  borderRadius: "10px",

                  marginLeft: "1rem",
                }}
              >
                <div className="col">
                  <b style={{ color: "white" }}>
                    Quality Services , Very Professional and arrived on Time ,
                    Happy with the assistance.
                  </b>
                </div>
                <div className="col">- Asif Mohammed (Receptionist)</div>
                <div className='col'> ( {Reviews} reviews)</div>
              </div>
            </div>
            
            <div
              className="row"
              style={{
                background: "#272727",
                marginTop: "1rem",
                borderRadius: "10px",
                paddingTop: "2rem",
              }}
            >
              <div
                className="col-4"
                style={{
                  height: "160px",

                  borderRadius: "10px",
                }}
              >
                <div className="col">
                  <b style={{ color: "white" }}> Neso Hospital - </b>
                  <span style={{ color: "#54acf0" }}>Remote</span>{" "}
                </div>
                <div className="col">Marthahali , Bangaluru, karnataka</div>
                <div className="col">04/06/2020 at 4.30 PM</div>
              </div>

              <Divider
                variant="middle"
                orientation="vertical"
                flexItem
                style={{
                  background: "white",
                  marginLeft: "2rem",
                  height: "100px",
                  marginTop: ".8rem",
                }}
              />
              <div>
                <StarBorderIcon
                  style={{ color: "#ffa173", marginTop: "1.5rem" }}
                />{" "}
                <br /> 3.5
              </div>
              <div
                className="col-6"
                style={{
                  background: "#272727",
                  height: "160px",

                  borderRadius: "10px",

                  marginLeft: "1rem",
                }}
              >
                <div className="col">
                  <b style={{ color: "white" }}>
                    {" "}
                    Quality Services , Very Professional and arrived on Time ,
                    Happy with the assistance.
                  </b>
                </div>
                <div className="col">- Asif Mohammed (Receptionist)</div>
              </div>
            </div>
            
            <div
              className="row"
              style={{
                background: "#272727",
                marginTop: "1rem",
                borderRadius: "10px",
                paddingTop: "2rem",
              }}
            >
              <div
                className="col-4"
                style={{
                  height: "160px",

                  borderRadius: "10px",
                }}
              >
                <div className="col">
                  <b style={{ color: "white" }}> Neso Hospital - </b>{" "}
                  <span style={{ color: "#54acf0" }}>Remote</span>{" "}
                </div>
                <div className="col">Marthahali , Bangaluru, karnataka</div>
                <div className="col">04/06/2020 at 4.30 PM</div>
              </div>

              <Divider
                variant="middle"
                orientation="vertical"
                flexItem
                style={{
                  background: "white",
                  marginLeft: "2rem",
                  height: "100px",
                  marginTop: ".8rem",
                }}
              />
              <div>
                <StarBorderIcon
                  style={{ color: "#fc6070", marginTop: "1.5rem" }}
                />{" "}
                <br /> 1.5
              </div>
              <div
                className="col-6"
                style={{
                  background: "#272727",
                  height: "160px",

                  borderRadius: "10px",

                  marginLeft: "1rem",
                }}
              >
                <div className="col">
                  <b style={{ color: "white" }}>
                    {" "}
                    Quality Services , Very Professional and arrived on Time ,
                    Happy with the assistance.
                  </b>
                </div>
                <div className="col">- Asif Mohammed (Receptionist)</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
