import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCog, faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div className='row d-flex justify-items-around'>
        <div className="col-md-4 col-sm-12 bg-light box-head">
            <FontAwesomeIcon icon={faUserCog}/>
         Admin
        </div>
        <div className="col-md-4 col-sm-12 bg-light box-head">
        <FontAwesomeIcon icon={faUserTie}/>
         Teacher
        </div>
        <div className="col-md-4 col-sm-12 bg-light box-head">
        <FontAwesomeIcon icon={faUserGraduate}/>
         Student
        </div>
         

    </div>
  )
}

export default Home