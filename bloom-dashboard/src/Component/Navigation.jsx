import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook, faBullhorn, faCalendarAlt, faChalkboard, faChalkboardTeacher, faChartPie, faCog, faForward, faInfo, faLock, faSchool, faStar, faUniversity } from '@fortawesome/free-solid-svg-icons';
import {faComments, faExpandArrowsAlt, faThLarge, faUserCircle, faSignOut, faUserEdit, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'
import { faUser } from '@fortawesome/free-regular-svg-icons';


function Navigation() {
  
  // let arrow = document.querySelectorAll(".arrow");
  // for (var i = 0; i < arrow.length; i++) {
  //   arrow[i].addEventListener("click", (e)=>{
  //  let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
  //  arrowParent.classList.toggle("showMenu");
  //   });
  // }
  
  // let sidebar = document.querySelector(".sidebar");
  // let sidebarBtn = document.querySelector(".bx-menu");
  // sidebarBtn.addEventListener("click", ()=>{
  // console.log(sidebarBtn);
  //   sidebar.classList.toggle("close");
  // });
  
  return (
    <>

<div className="sidebar close">
    <div className="logo-details">
      <span className="logo_name">Destiny International School</span>
    </div>
    <ul className="nav-links">
      <li>
        {/* <link to='/'> */}
        <span className="link_name">
          <FontAwesomeIcon   icon={faTachometerAlt}/>
          </span>
          {/* </link> */}
        <ul className="sub-menu blank">
          <li> Home</li>
        </ul>
      </li>
      <li>
        <div className="icon-link">
        {/* <Link to='/'> */}
            <span className="link_name">
            <span className="link_name">
          <FontAwesomeIcon icon={faBullhorn}/>
          </span>
            </span>
            {/* </Link> */}
          {/* <i className='bx bxs-chevron-down arrow'></i> */}
        </div>
        {/* <ul className="sub-menu"> */}
          {/* <li> <Link to='/'>Solutions</Link></li> */}
          {/* <li> <Link to='/'>Payment Api</Link></li> */}
          {/* <li><Link to='/'>Accounts Api</Link></li> */}
          {/* <li><Link to='/'>Finance Api</Link></li> */}
        {/* </ul> */}
        <ul className="sub-menu blank">
          <li>Notice</li>
        </ul>
      </li>
      <li>
        <div className="icon-link">
          {/* <Link to='/'> */}
            <span className="link_name"><FontAwesomeIcon icon={faUser}/></span>
            {/* </Link> */}
          {/* <i className='bx bxs-chevron-down arrow'></i> */}
        </div>
        {/* <ul className="sub-menu"> */}
          {/* <li><Link to='/'>Posts</Link></li> */}
          {/* <li><Link to='/'>Recent</Link></li> */}
          {/* <li><Link to='/'>Trending</Link></li> */}
          {/* <li><Link to='/'>Most Visited</Link></li> */}
        {/* </ul> */}
        <ul className="sub-menu blank">
          <li> Users</li>
        </ul>
      </li>
       <li>
        <div className="icon-link">
          {/* <Link to='/'> */}
            <span className="link_name"><FontAwesomeIcon icon={faUniversity}/></span>
            {/* </Link> */}
          {/* <i className='bx bxs-chevron-down arrow'></i> */}
        </div>
        {/* <ul className="sub-menu"> */}
            {/* <li><Link to='/'>Insight</Link></li> */}
            {/* <li><Link to='/'>Money Movement</Link></li> */}
          {/* <li><Link to='/'>Financial burnout</Link></li> */}
          {/* <li><Link to='/'>Enterprise Spotlight</Link></li> */}
        {/* </ul> */}
        <ul className="sub-menu blank">
          <li> Section</li>
        </ul>
    </li>
      <li>
          {/* <Link to='/'> */}
          <span className="link_name"><FontAwesomeIcon icon={faSchool}/></span>
          {/* </Link> */}
        {/* <ul className="sub-menu blank">
            <li><Link to='/'>Pricing</Link></li>
        </ul> */}
        <ul className="sub-menu blank">
          <li> School</li>
        </ul>
    </li>
    <li>
        {/* <Link to='/'> */}
          <span className="link_name"><FontAwesomeIcon icon={faBook}/></span>
          {/* </Link> */}
        <ul className="sub-menu blank">
            <li>Classes</li>
        </ul>
    </li>
    <li>
        {/* <Link to='/'> */}
          <span className="link_name"><FontAwesomeIcon icon={faStar}/></span>
          {/* </Link> */}
        <ul className="sub-menu blank">
          <li><Link to='/'>Grade System</Link></li>
        </ul>
      </li>
      <li>
        {/* <Link to='/'> */}
          <span className="link_name"><FontAwesomeIcon icon={faInfo}/></span>
          {/* </Link> */}
        {/* <ul className="sub-menu blank"> */}
            {/* <li><Link to='/'>Setting</Link></li> */}
        {/* </ul> */}
        <ul className="sub-menu blank">
          <li> CBTs</li>
        </ul>
    </li>
      <li>
        {/* <Link to='/'> */}
          <span className="link_name"><FontAwesomeIcon icon={faChalkboardTeacher}/></span>
          {/* </Link> */}
          <ul className="sub-menu blank">
          <li> Manage E-classes</li>
        </ul>
    </li>
      <li>
        {/* <Link to='/'> */}
          <span className="link_name"><FontAwesomeIcon icon={faChalkboard}/></span>
          {/* </Link> */}
          <ul className="sub-menu blank">
          <li> Manage Exam</li>
        </ul>
    </li>
      <li>
        {/* <Link to='/'> */}
          <span className="link_name"><FontAwesomeIcon icon={faCog}/></span>
          {/* </Link> */}
          <ul className="sub-menu blank">
          <li> Attendance</li>
        </ul>
    </li>
      <li>
        {/* <Link to='/'> */}
          <span className="link_name"><FontAwesomeIcon icon={faChartPie}/></span>
          {/* </Link> */}
          <ul className="sub-menu blank">
          <li> Promotions</li>
        </ul>
    </li>
      <li>
        {/* <Link to='/'> */}
          <span className="link_name"><FontAwesomeIcon icon={faForward}/></span>
          {/* </Link> */}
          <ul className="sub-menu blank">
          <li> Timetable</li>
        </ul>
    </li>
      <li>
        {/* <Link to='/'> */}
          <span className="link_name"><FontAwesomeIcon icon={faChalkboardTeacher}/></span>
          {/* </Link> */}
          <ul className="sub-menu blank">
          <li> Exam pin</li>
        </ul>
    </li>
      <li>
        {/* <Link to='/'> */}
          <span className="link_name"><FontAwesomeIcon icon={faCalendarAlt}/></span>
          {/* </Link> */}
          <ul className="sub-menu blank">
          <li> School Settings</li>
        </ul>
    </li>
      <li>
        {/* <Link to='/'> */}
          <span className="link_name"><FontAwesomeIcon icon={faLock}/></span>
          {/* </Link> */}
          <ul className="sub-menu blank">
          <li> My profile</li>
        </ul>
    </li>
      <li>
        {/* <Link to='/'> */}
          <span className="link_name"><FontAwesomeIcon icon={faCog}/></span>
          {/* </Link> */}
    </li>
      <li>
        {/* <Link to='/'> */}
          <span className="link_name"><FontAwesomeIcon icon={faUserEdit}/></span>
          {/* </Link> */}
    </li>
    </ul>
</div>
<section className="home-section">
    <div className="home-content">
      <i className='bx bx-menu'><FontAwesomeIcon  size={'1x'} icon={faBars}/></i>
      <Navbar className="topbar  bg-light">
        {/* <Link to='/'> */}
      <Navbar.Brand className='brand' href=""> <h2>Home</h2></Navbar.Brand>
        {/* </Link> */}
      <Nav className="me-auto sub mr-5">
        <Nav.Link href="#"> <FontAwesomeIcon  size={'2x'} icon={faComments}/> </Nav.Link>
        <Nav.Link href="#"><FontAwesomeIcon  size={'2x'} icon={faExpandArrowsAlt}/></Nav.Link>
        <Nav.Link href="#"><FontAwesomeIcon  size={'2x'} icon={faThLarge}/></Nav.Link>
        
        <div>
        
        <Nav.Link href="#">
        <Dropdown>
  <Dropdown.Toggle variant=""  id="dropdown-basic"><FontAwesomeIcon  size={'2x'} icon={faUserCircle}/></Dropdown.Toggle>
  <Dropdown.Menu className='pr-5' >
    <Dropdown.Item href="#/action-1"><FontAwesomeIcon icon={faTachometerAlt}/> Dashboard</Dropdown.Item>
    <Dropdown.Item href="#/action-2"><FontAwesomeIcon icon={faUserEdit}/> My Profile</Dropdown.Item>
    <Dropdown.Item href="#/action-3"><FontAwesomeIcon icon={faSignOut}/> Sign Out</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
        </Nav.Link>
        </div>
      </Nav>
    </Navbar>
    </div>
</section>

    </>
  )
}

export default Navigation;