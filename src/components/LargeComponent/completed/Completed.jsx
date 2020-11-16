import React from 'react'
import { Bell, Power } from "react-feather";
import Divider from "@material-ui/core/Divider";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import './completed.css'

const Completed = ({
    history
}) => {
    
    return(
        <div className='col-10 ml-auto p-0' style={{ 
            minWidth: "1000px" ,
            position : 'relative'
        }}
        >
            <div
                className='col-12 pl-3 pt-3 p-0 pb-5'
                style={{
                    height: "80px",
                    position : 'sticky',
                    top : 0,
                    boxShadow: "0px 5px 15px black"
                }} 
            >
                <h3 className='d-inline fo1 font-weight-light'>Completed</h3>
                <div className='mr-3 rounded-circle p-2 c4 float-right text-light'>
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

            <div className="row">
                <div className="col-12 d-flex mt-4 ml-3 sort-dropdown">
                    <p className='mt-2'>Sort :</p>
                    <select className='ml-2'>
                        <option value="">Most recent First</option>    
                        <option value="">Older First</option>    
                    </select>

                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card p-3 m-4">
                        <div className="row">
                            <div className="col-5">
                                <div className="row">
                                    <div className="col left-title mb-2">
                                        <p style={{ color: 'white'}}>
                                            Apollo Hospital - 
                                            <span style={{ color: '#54ACF0'}}> Onsite</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col left-body">
                                        <p className='m-0'> Sarjapur Road, Bengaluru, Karnataka </p>
                                        <p className='m-0'> 04/06/2020 at 04.39 PM </p>
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
                                                    marginTop: "1.5rem" 
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
                                        <p className='m-0 pb-2 right-body'>
                                            Quality Services , Very Professional and arrived on Time , Happy with the assistance.
                                        </p>
                                        <p className='m-0 pb-2'>-Asif Mohammed( Receptionist )</p>
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
                                        <p style={{ color: 'white'}}>
                                            Neso Hospital - 
                                            <span style={{ color: '#54ACF0'}}> Remote</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col left-body">
                                        <p className='m-0'> Sarjapur Road, Bengaluru, Karnataka </p>
                                        <p className='m-0'> 04/06/2020 at 04.39 PM </p>
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
                                                    marginTop: "1.5rem" 
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
                                        <p className='m-0 pb-2 right-body'>
                                            Quality Services , Very Professional and arrived on Time , Happy with the assistance.
                                        </p>
                                        <p className='m-0 pb-2'>-Asif Mohammed( Receptionist )</p>
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
                                        <p style={{ color: 'white'}}>
                                            Sum Hospital - 
                                            <span style={{ color: '#54ACF0'}}> Remote</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col left-body">
                                        <p className='m-0'> Sarjapur Road, Bengaluru, Karnataka </p>
                                        <p className='m-0'> 04/06/2020 at 04.39 PM </p>
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
                                                    marginTop: "1.5rem" 
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
                                        <p className='m-0 pb-2 right-body'>
                                            Quality Services , Very Professional and arrived on Time , Happy with the assistance.
                                        </p>
                                        <p className='m-0 pb-2'>-Asif Mohammed( Receptionist )</p>
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
                                        <p style={{ color: 'white'}}>
                                            Neso Hospital - 
                                            <span style={{ color: '#54ACF0'}}> Onsite</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col left-body">
                                        <p className='m-0'> Sarjapur Road, Bengaluru, Karnataka </p>
                                        <p className='m-0'> 04/06/2020 at 04.39 PM </p>
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
                                                    marginTop: "1.5rem" 
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
                                        <p className='m-0 pb-2 right-body'>
                                            Quality Services , Very Professional and arrived on Time , Happy with the assistance.
                                        </p>
                                        <p className='m-0 pb-2'>-Asif Mohammed( Receptionist )</p>
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
                                        <p style={{ color: 'white'}}>
                                            Neso Hospital - 
                                            <span style={{ color: '#54ACF0'}}> Onsite</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col left-body">
                                        <p className='m-0'> Sarjapur Road, Bengaluru, Karnataka </p>
                                        <p className='m-0'> 04/06/2020 at 04.39 PM </p>
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
                                                    marginTop: "1.5rem" 
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
                                        <p className='m-0 pb-2 right-body'>
                                            Quality Services , Very Professional and arrived on Time , Happy with the assistance.
                                        </p>
                                        <p className='m-0 pb-2'>-Asif Mohammed( Receptionist )</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    )
}

export default Completed