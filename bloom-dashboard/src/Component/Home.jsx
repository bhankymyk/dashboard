import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCog, faUserTie, faUserGraduate, faCheck, faForward, faFileContract, faUsers, faKey, faCog, faUserEdit, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function Home() {
    const [value, onChange] = useState(new Date());
  return (
    <>
    
    <div className='row d-flex mx-auto mt-5'>
        <div className="col-md-3 col-sm-12 bg-light mx-auto box-head">
            <div className="cog">
            <FontAwesomeIcon size={'3x'} icon={faUserCog}/>
            </div>
         <span className='info-box' >Admins</span> 
        </div>
        <div className="col-md-3 col-sm-12 bg-light mx-auto box-head">
            <div className="tie bg-danger">
        <FontAwesomeIcon size={'3x'} icon={faUserTie} />
            </div>
         Teachers
        </div>
        <div className="col-md-3 col-sm-12 bg-light mx-auto box-head">
            <div className="graduate bg-success">
        <FontAwesomeIcon  size={'3x'} icon={faUserGraduate} />
            </div>
         Students
        </div>
    </div>


    <div className='row d-flex mx-auto mt-5'>
        <div className="col-md-3 col-sm-12 bg-light mx-auto  box-head-1">
            <div className="icon-2">
            <FontAwesomeIcon size={'3x'} icon={faUserCog}/>
            </div>
            <h3>Admins</h3>
        </div>
        <div className="col-md-3 col-sm-12 bg-light mx-auto box-head-2">
            <div className="icon-2">
        <FontAwesomeIcon size={'3x'} icon={faUserTie} />
            </div>
            <h3>Teachers</h3>
        </div>
        <div className="col-md-3 col-sm-12 bg-light mx-auto box-head-3">
            <div className="icon-2">
        <FontAwesomeIcon  size={'3x'} icon={faUserGraduate} />
            </div>
         <h3>Admit Student</h3>
        </div>
    </div>


    <div className='row d-flex mx-auto mt-5'>
        <div className="col-md-3 col-sm-12 bg-light mx-auto  box-head-1">
            <div className="icon-2">
            <FontAwesomeIcon size={'3x'} icon={faCheck}/>
            </div>
            <h3>Roll Call</h3>
        </div>
        <div className="col-md-3 col-sm-12 bg-light mx-auto box-head-2">
            <div className="icon-2">
        <FontAwesomeIcon size={'3x'} icon={faFileContract} />
            </div>
            <h3>Exam Registration </h3>
        </div>
        <div className="col-md-3 col-sm-12 bg-light mx-auto box-head-3">
            <div className="icon-2">
        <FontAwesomeIcon  size={'3x'} icon={faForward} />
            </div>
         <h3>Promotion</h3>
        </div>
    </div>


    <div className='row d-flex mx-auto mt-5'>
        <div className="col-md-3 col-sm-12 bg-light mx-auto  box-head-1">
            <div className="icon-2">
            <FontAwesomeIcon size={'3x'} icon={faUsers}/>
            </div>
            <h3>Student Management</h3>
        </div>
        <div className="col-md-3 col-sm-12 bg-light mx-auto box-head-2">
            <div className="icon-2">
        <FontAwesomeIcon size={'3x'} icon={faKey} />
            </div>
            <h3>Generate Pin</h3>
        </div>
        <div className="col-md-3 col-sm-12 bg-light mx-auto box-head-3">
            <div className="icon-2">
        <FontAwesomeIcon  size={'3x'} icon={faCog} />
            </div>
         <h3>Settings</h3>
        </div>
    </div>


    <div className='row d-flex mx-auto mt-5'>
        <div className="col-md-4 col-sm-12 bg-light mx-auto  box-head-1">
            <div className="icon-2">
            <FontAwesomeIcon size={'3x'} icon={faUserEdit}/>
            </div>
            <h3>Profile</h3>
        </div>
        <div className="col-md-4 col-sm-12 bg-light mx-auto box-head-2">
            <div className="icon-2">
        <FontAwesomeIcon size={'3x'} icon={faSignOut} />
            </div>
            <h3>Logout</h3>
        </div>
    </div>

        {/* Calendar */}
    <div className='col-md-12' >
    <Calendar onChange={onChange} value={value} />
    </div>



    



    </>
  )
}

export default Home;