import React from 'react'
import '../../assets/styles/App.css'
import WatchVideo from '../../assets/icons/WatchVideo'
import hero from '../../assets/IMG_0204.jpg'
import curve from '../../assets/shape.png'

function Hero() {

  return (
    <div className='container text-font'>
      <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
      {/* <div className='blob blob-left'></div> */}
        <div className='col-10 col-sm-8 col-lg-6'>
          <div class="mt-12 mt-lg-0 position-relative">
              <img src={hero} alt="online course" className="img-fluid rounded-3 position-relative "></img>
          </div>  
        </div>
        {/* <div className='blob blob-right'></div> */}
        <div className='col-lg-6'>
          <div className='lc-block mb-3'>
            <div editable='rich'>
              <p className='fw-bold display-5 mb-4 mt-3'>
              <span className='heading-color'>Time To  </span>
                <span className=''> Empowering                   
                  <img
                      className='d-block text-end'
                      src={curve}
                      
                      alt="Headline curve"
                      style={{ width: '210px', height: 'auto', transform: 'rotate(3deg)' }}
                    ></img>
                  </span>Tomorrow's Generation
                  </p>    
            </div>
          </div>
          <div className='lc-block mb-3'>
            <div editable='rich'>
              <p className='text-font-size'>
                Empowering the next generation of innovators with comprehensive tech education, fostering excellence, and enriching communities 
                through knowledge sharing and collaboration
              </p>
            </div>
          </div>
          <div className='lc-block d-grid gap-2 md-flex d-flex justify-content-md-left mt-4 pt-4'>
            <a className='btn btn-outline-secondary px-5 pt-2 me-md-4 rounded-pill button-background' href='#' role='button'>Get Started</a>
            <a className='btn btn-outline-secondary rounded-circle button-background' href='#' role='button'>
              <WatchVideo />
            </a>
            <span className='mt-2 text-font-size'> Watch Video</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero