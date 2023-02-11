import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='contacts'>Contact</div>
          <div className='form-header'>
                <p className='text'>I would love to hear about your 
                project and how i could help.Please fill in the 
                form,and I`ll get back to you as soon as possible.</p>
                <div>
          <div className='formhr'>Name
            <hr />
          </div>
          <div className='formhr'>Email
            <hr />
          </div>
          <div className='formhr'>Message
            <hr className='formh' />
          </div>
                </div>
              </div>
              <div>SEND MASSEGE</div>
     
      <hr/>
    </div>
  )
}

export default Footer
