import React from 'react'
import './Details.css'
function Details(props) {
  return (
      <div className='details'>
              <img className='images' src={props.img} alt='' />
              <div className='title'>{props.title}</div>
              <div className='title'>{props.language}</div>
              <div className='view'>
                <div className='title'>{props.view}</div>
                <div className='title'>{props.code}</div>
              </div>
      </div>
  )
}

export default Details
