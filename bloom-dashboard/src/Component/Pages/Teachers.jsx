import React from 'react'
import styles from '../Pages/Styles/admins.module.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCog} from '@fortawesome/free-solid-svg-icons'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { BreadcrumbItem } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom'
// import Header from './Header'

function Admins() {
  return (
    <>
    <div className={`mt-3 ${styles.subHeader}`}>
    <h2 className='heading'>Teachers</h2>
      <div className={styles.subHeader1}>
      <Breadcrumb>
      <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
      <BreadcrumbItem><Link to="/">Dashboard</Link></BreadcrumbItem>
      <BreadcrumbItem>Teachers</BreadcrumbItem>
      </Breadcrumb>
      </div>
    </div>
    <div className={`p-2 ${styles.cog}`}>
            <FontAwesomeIcon size={'2x'} icon={faUserCog}/>
            <span className={`pt-5 ${styles.infoBox}`}> Add Teachers</span> 
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
    <Dropdown.Item href="#/action-3">...</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  </li>
</ul>
</div>
<div className="search-box float-right mb-5">
    <label htmlFor="search"> Search:
    <input type="search" className='search'/>
    </label>
</div>
    
<div>
  <Table responsive="md">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Image</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Status</th>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>
  
  
</div>


    </>

  )
}

export default Admins;