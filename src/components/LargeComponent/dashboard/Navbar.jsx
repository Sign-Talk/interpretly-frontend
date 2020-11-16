import React from "react";
import { NavLink } from "react-router-dom";
import { Popup } from 'semantic-ui-react'
import {
  CheckSquare,
  Grid,
  Calendar,
  PlusSquare,
  UserCheck,
  Send,
  Bell,
} from "react-feather";

function Navbar() {
  return (
    <div
      className={`col-2 c0 pt-5 float-left`}
      style={{
        minWidth: "180px",
        height: "100vh",
        boxShadow: "1px 0px 15px black",
        zIndex: 100,
        position: "fixed",
        top: "0px",
      }}>
      <NavLink
        activeClassName='c4'
        className='col-12 p-2 d-block rounded f15'
        to='/interpretly/dashboard'>
        <Grid className='d-inline mr-2' size='18' /> Dashboard
      </NavLink>
      <NavLink
        activeClassName='c4'
        className='col-12 p-2 d-block rounded f15'
        to='/interpretly/request'>
        <PlusSquare className='d-inline mr-2' size='18' /> Job Requests
      </NavLink>
      <Popup content='work in progress' trigger={
      <NavLink
        activeClassName='c4'
        className='col-12 p-2 d-block rounded f15'
        to='/interpretly/schedule'>
        <Calendar className='d-inline mr-2' size='18' /> Schedule
      </NavLink>
      }/>
      <NavLink
        activeClassName='c4'
        className='col-12 p-2 d-block rounded f15'
        to='/interpretly/completed'>
        <CheckSquare className='d-inline mr-2' size='18' /> Completed
      </NavLink>

      {/* ============= {{{{{{{{{{{{}}}}}}}}}}}} =============*/}
      <br />
      <br />
      <br />

      <Popup content='work in progress' trigger={
        <NavLink
          activeClassName='c4'
          className='col-12 p-2 d-block rounded f15'
          to='/interpretly/message'>
          <Send className='d-inline mr-2' size='18' /> Messages
        </NavLink>
      }/>
      <Popup content='work in progress' trigger={
        <NavLink
          activeClassName='c4'
          className='col-12 p-2 d-block rounded f15'
          to='/interpretly/notification'>
          <Bell className='d-inline mr-2' size='18' /> Notification
      </NavLink>
      } />
      <NavLink
        activeClassName='c4'
        className='col-12 p-2 d-block rounded f15'
        to='/interpretly/profile'>
        <UserCheck className='d-inline mr-2' size='18' /> Profile
      </NavLink>
      {/* ============= {{{{{{{{{{{{}}}}}}}}}}}} =============*/}
    </div>
  );
}

export default Navbar;
