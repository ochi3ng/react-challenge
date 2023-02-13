import React from 'react'
import './Footer.css'
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";

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
              <div className='massege'>SEND MASSEGE</div>
     
      <hr/>
      <div className='footerdetail'>
        JohnOchieng
      </div>
      <div className='icons'>
        <AiFillGithub className='icon' />
        <CiLinkedin className='icon' />
        <CiTwitter className='icon' />
      </div>
      
    </div>
  )
}

export default Footer
