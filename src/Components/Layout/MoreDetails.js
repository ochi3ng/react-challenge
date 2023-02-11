import React from 'react'
import './MoreDetails.css'

import OchiImages from '../../Data/ochi.jpg'
import DataFetching from '../../Data/DataFetching'
import Footer from './Footer'
const MoreDetails = () => {
  return (
    <div className='app'>

      <div className='header'>
        <img className='image' src={OchiImages} alt='' />
        <div>
          <h1>Hello! Nice to meet you I`m John.</h1>
          <p>Based in Kenya, I`m a front-end developer 
            passionate about 
            accessible web apps that users love.</p>
          <div className='conta'>CONTACT ME</div>
        </div>
      </div>
      <hr />

      <div className='language-div'>
        <div className='language-header'>
          <div className='style'>
            <div className='languages'>
              <div className='language'>
                HTML
                <div className='experience'>4 Years Experience</div>
              </div>
              <div className='language'>CSS
                <div className='experience'>4 Years Experience</div>
              </div>
              <div className='language'>Javascript
                <div className='experience'>4 Years Experience</div>
              </div>
            </div>
            <div className='languages'>
              <div className='language'>Accessibillity
                <div className='experience'>4 Years Experience</div>
              </div>
              <div className='language'>React
                <div className='experience'>3 Years Experience</div>
              </div>
              <div className='language'>Sass
                <div className='experience'>3 Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

   
      <h1 className='contacts'>Projects</h1>
      <div >
        <DataFetching/>
      </div>
        <Footer />
      
    </div>
  )
}

export default MoreDetails