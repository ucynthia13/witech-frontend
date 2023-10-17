import React from 'react'
import image1 from '../assets/image1.jpg'
function Hero() {
  return (
    <div className='container'>
      <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
        <div className='col-10 col-sm-8 col-lg-6'>
          <img src={image1} className='d-block mx-lg-auto img-fluid rounded'></img>
        </div>
        <div className='col-lg-6'>
          <div className='lc-block mb-3'>
            <div editable='rich'>
              <h2 className='fw-bold display-5 mb-4'>Time To Empowering Tomorrow's </h2>
            </div>
          </div>
          <div className='lc-block mb-3'>
            <div editable='rich'>
              <p className='lead'>
                empowering the next generation of innovators with comprehensive tech education, fostering excellence, and enriching communities 
                through knowledge sharing and collaboration
              </p>
            </div>
          </div>
          <div className='lc-block d-grid gap-2 md-flex d-flex justify-content-md-left mt-4 pt-4'>
            <a className='btn btn-outline-secondary px-4 me-md-4' href='#' role='button'>Get Started</a>
            <a className='btn btn-outline-secondary px-4' href='#' role='button'>
              <span className=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>
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