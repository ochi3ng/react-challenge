import React from 'react'
import './Details.css'
function Details({ img, title, language, view, ViewCode, code, LiveDemo }) {
  return (
      <div className='details'>
              <img className='images' src={img} alt='' />
              <div className='title'>{title}</div>
              <div className='title'>{language}</div>
              <div className='view'>   
        <a href={ViewCode} target="_blank">{code}</a>
        <a href={LiveDemo} target="_blank">{view}</a>
              </div>
      </div>
  )
}

export default Details
