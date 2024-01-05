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
              <p className='fw-bold display-5 mb-4 mt-2'>
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
            <a className='btn btn-outline-secondary px-5 pt-2 me-md-5 rounded-pill button-background' href='#' role='button'>Join 30 Days Free</a>
            <a className='btn btn-outline-secondary rounded-circle button-background' href='#' role='button'>
              <WatchVideo />
            </a>
            <span className='mt-2 text-font-size'> Watch Video</span>
          </div>
          
          <div className='mt-5'>
          <span className='d-block h6 team-font-size fw-bold'>Trusted by Rwandan Schools</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
          </svg>
          <span className='team-font-size ms-1 fw-bold'> 4.2/5</span>
          <p className='team-font-size mt-1'>35k Reviews</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero