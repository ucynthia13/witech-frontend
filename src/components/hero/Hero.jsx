import React from 'react';
import '../../assets/styles/App.css';
import WatchVideo from '../../assets/icons/WatchVideo';
import hero from '../../assets/IMG_0204.jpg';

function Hero() {
  return (
    <div className='container text-font'>
      <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
        <div className='col-lg-6'>
          <div className='mt-lg-0 position-relative'>
            <img
              src={hero}
              alt='online course'
              className='img-fluid rounded-2 position-relative '
              loading='lazy'
            ></img>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='lc-block mb-3'>
            <div editable='rich'>
              <p className='fw-bold display-5 mb-3 mt-5'>
                <span className=''><span className=''>Time To </span><span className='heading-color underlined'>Empowering</span> <span className='d-block mt-3'>Tomorrow's Generation</span> </span>
              </p>
            </div>
          </div>

          <div className='lc-block mb-3'>
            <div editable='rich'>
              <p className='text-font-size'>
                Empowering the next generation of innovators with comprehensive tech education,
                fostering excellence, and enriching communities through knowledge sharing and
                collaboration
              </p>
            </div>
          </div>

          <div className='lc-block d-grid gap-2 md-flex d-flex justify-content-md-left mt-4 pt-4'>
            <a
              className='btn btn-outline-secondary px-5 pt-2 me-md-5 rounded-pill button-background'
              href='#'
              role='button'
            >
              Join 30 Days Free
            </a>
            <a
              className='btn btn-outline-secondary rounded-circle button-background'
              href='#'
              role='button'
            >
              <WatchVideo />
            </a>
            <span className='mt-2 text-font-size'> Watch Video</span>
          </div>

          <div className='mt-5'>
            <span className='d-block h6 team-font-size fw-bold'>Trusted by Rwandan Schools</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className={`bi bi-star${star < 5 ? '-fill' : '-half'}`}
                viewBox='0 0 16 16'
              >
                <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
              </svg>
            ))}
            <span className='team-font-size ms-1 fw-bold'> 4.7/5</span>
            <p className='team-font-size mt-1'>35k Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
