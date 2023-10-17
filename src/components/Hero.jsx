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
            <a className='btn btn-success px-4 me-md-4' href='#' role='button'>Get Started</a>
            <a className='btn btn-outline-secondary px-4' href='#' role='button'>Watch Video</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero