import React from 'react'
import styles from '../Pages/Styles/admins.module.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCog} from '@fortawesome/free-solid-svg-icons'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { BreadcrumbItem } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Students() {
  return (
    <>
    <div className={`mt-3 ${styles.subHeader}`}>
    <h2 className={styles.heading}>Add Students</h2>
      <div className={styles.subHeader1}>
      <Breadcrumb>
      <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
      <BreadcrumbItem><Link to="/">Dashboard</Link></BreadcrumbItem>
      <BreadcrumbItem>Add Students</BreadcrumbItem>
      </Breadcrumb>
      </div>
    </div>
    <div className={`p-2 ${styles.cog}`}>
            <FontAwesomeIcon size={'2x'} icon={faUserCog}/>
            <span className={`pt-5 ${styles.infoBox}`}> Add Students</span> 
    </div>
    </>
  )
}

export default Students;