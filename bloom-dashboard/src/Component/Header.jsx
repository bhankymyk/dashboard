import React, {} from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComments, faExpandArrowsAlt, faThLarge, faUserCircle, faSignOut, faUserEdit, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'

function Header() { 
    // const [isShown, setIsShown] = useState(false)
    // const handleClick = event => {
    //     setIsShown(current => !current);
    // };
  return (
    <>
      <Navbar className="topbar  bg-light">
        <Link to='/'>
      <Navbar.Brand className='brand' href=""> <h2>Home</h2></Navbar.Brand>
        </Link>
      <Nav className="me-auto sub">
        <Nav.Link href="#"> <FontAwesomeIcon  size={'2x'} icon={faComments}/> </Nav.Link>
        <Nav.Link href="#"><FontAwesomeIcon  size={'2x'} icon={faExpandArrowsAlt}/></Nav.Link>
        <Nav.Link href="#"><FontAwesomeIcon  size={'2x'} icon={faThLarge}/></Nav.Link>
        
        <div>
        
        <Nav.Link href="#">
        <Dropdown>
  <Dropdown.Toggle variant="" id="dropdown-basic"><FontAwesomeIcon  size={'2x'} icon={faUserCircle}/></Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"><FontAwesomeIcon icon={faTachometerAlt}/> Dashboard</Dropdown.Item>
    <Dropdown.Item href="#/action-2"><FontAwesomeIcon icon={faUserEdit}/> My Profile</Dropdown.Item>
    <Dropdown.Item href="#/action-3"><FontAwesomeIcon icon={faSignOut}/> Sign Out</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
        </Nav.Link>

        {/* </button> */}

        {/* {isShown && (
        <div>
            <FontAwesomeIcon icon={faTachometerAlt}/> Dashboard
        </div>
        )}
        {isShown && (
            <div>
                <FontAwesomeIcon icon={faUserEdit}/> My Profile
            </div>
        )}
        {isShown && (
            <div>
                <FontAwesomeIcon icon={faSignOut}/> Sign Out
            </div>
        )} */}
        </div>


      </Nav>
    </Navbar>




      </>
  )
}

export default Header;