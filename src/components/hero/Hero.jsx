import React from 'react'
import '../../assets/styles/App.css'
import WatchVideo from '../../assets/icons/WatchVideo'
import image1 from '../../assets/image1.jpg'

function Hero() {
  return (
    <div className='container text-font'>
      <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
        <div className='col-10 col-sm-8 col-lg-6 '>
          <img className='img-fluid' src={image1}></img>
        </div>
        <div className='col-lg-6'>
          <div className='lc-block mb-3'>
            <div editable='rich'>
              <h2 className='fw-bold display-5 mb-4 animate__animated animate__bounce animate__slower'>Time To <span className='heading-color'>Empowering</span> Tomorrow's </h2>
            </div>
          </div>
          <div className='lc-block mb-3'>
            <div editable='rich'>
              <p className=''>
                empowering the next generation of innovators with comprehensive tech education, fostering excellence, and enriching communities 
                through knowledge sharing and collaboration
              </p>
            </div>
          </div>
          <div className='lc-block d-grid gap-2 md-flex d-flex justify-content-md-left mt-4 pt-4'>
            <a className='btn btn-outline-secondary px-5 pt-2 me-md-4 rounded-pill button-background' href='#' role='button'>Get Started</a>
            <a className='btn btn-outline-secondary px-4 rounded-pill watch-video' href='#' role='button'>
              <span className=''>
                <WatchVideo />
              </span>
              <span className=''> Watch Video</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero