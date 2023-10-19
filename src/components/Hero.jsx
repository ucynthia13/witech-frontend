import React from 'react'

function Hero() {
  const styles= `

  .blob1{
    background-image: url(https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80);
    width: 650px;
    height: 450px;
    background-size: cover;
    -webkit-background-position: center;
    background-position: center center;x
    // margin: 20px;
    box-shadow: 0 5px 5px 5px rgba(13, 110, 253, 0.2);
    animation: animate 5s ease-in-out infinite;
    transition: all 1s ease-in-out;
}

@keyframes animate {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

  .heading-color {
    color: rgb(119,0,207);
  }

  .button-background{
    background-color: rgb(119,0,207);
    color: white;
  }

  .button-background:hover{
    color: rgb(119,0,207);
    background-color: white;
    border-color: rgb(119,0,207);
  }

  .watch-video{
    color: rgb(119,0,207);
    background-color: white;
    border-color: rgb(119,0,207);
  }

  .watch-video:hover{
    background-color: rgb(119,0,207);
    color: white;
    border-color: rgb(119,0,207);
  }
    
  `
  return (
    <div className='container'>
      <style>{styles}</style>
      <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
        <div className='col-10 col-sm-8 col-lg-6 blob1 '>
          
        </div>
        <div className='col-lg-6'>
          <div className='lc-block mb-3'>
            <div editable='rich'>
              <h2 className='fw-bold display-5 mb-4 animate__animated animate__bounce animate__slower intro text-color'>Time To <span className='heading-color'>Empowering</span> Tomorrow's </h2>
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
            <a className='btn btn-outline-secondary px-4 me-md-4 rounded-pill button-background' href='#' role='button'>Get Started</a>
            <a className='btn btn-outline-secondary px-4 rounded-pill watch-video' href='#' role='button'>
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