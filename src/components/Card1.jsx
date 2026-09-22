import React from 'react'
import {Bookmark} from 'lucide-react'

const Card1 = (props) => {
  return (
    <div className='card'>
        <div>
          <div className='top'>
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={12} strokeWidth={2.0} /></button>
          </div>
          <div className='center'>
            <h3>{props.company} <span>{props.post}</span></h3>
            <h2>{props.role}</h2>
            <div className='tag'>
              <h4>{props.jobTime}</h4>
              <h4>{props.roleLevel}</h4>
            </div>
          </div>
        </div>

        <div className='bottom'>
          <h3>{props.rate}</h3>
        <button>Apply Now</button>
        </div>
          <p>{props.location}</p>

      </div>
  )
}

export default Card1