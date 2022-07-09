import React from 'react'
import styles from '../Pages/Styles/admins.module.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCog} from '@fortawesome/free-solid-svg-icons'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { BreadcrumbItem } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'
// import Header from './Header'

function Admins() {
  return (
    <>
    <div className={`mt-3 ${styles.subHeader}`}>
    <h2 className=''>Admins</h2>
      <div className={styles.subHeader1}>
      <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Dashboard</BreadcrumbItem>
      <BreadcrumbItem>Admin</BreadcrumbItem>
      </Breadcrumb>
      </div>
    </div>
    <div className={`p-2 ${styles.cog}`}>
            <FontAwesomeIcon size={'2x'} icon={faUserCog}/>
            <span className={`pt-5 ${styles.infoBox}`}> Add admins</span> 
    </div>

<div className={styles.mainHead}>
<ul className='d-flex bg-secondary mt-3'>
  <li><button className='btn-secondary'>Copy</button></li>
  <li><button className='btn-secondary'>Excel</button></li>
  <li><button className='btn-secondary'>PDF</button></li>
  <li><button className='btn-secondary'>Print</button></li>
  <li>
    <Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">Column Visibility</Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Image</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Email</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Phone</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Status</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  </li>
</ul>

</div>
    


    </>

  )
}

export default Admins;