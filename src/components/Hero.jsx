import React, { useEffect } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

function Hero() {
  useEffect(() => {

    const carousel = document.getElementById('carouselIndicator')
    
    const carouselInstance = new window.bootstrap.Carousel(carousel)
    
    const interval = setInterval(() => {
      //advance bootstroa carrousel     
      carouselInstance.next()
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <p className='h1'>Time To Empowering<span className='h2 d-grid'>Tomorrow's</span></p>
          <p>Empowering the next generation of innovators with 
            <span className='d-block'>Comprehensive Tech Education, Fostering Excellence, and </span>
            <span className='d-block'>Enriching Communities Through Knowledge Sharing and <span className='d-block'>Collaboration</span></span>
          </p>
        </div>
        <div className='col-6'>
          <div id='carouselIndicator' className='carousel slide' data-ride='carousel'>
            <ol className='carousel-indicators'>
              <li data-target='#carouselIndicator' data-slide-to='0' className='active'></li>
              <li data-target='#carouselIndicator' data-slide-to='1'></li>
              <li data-target='#carouselIndicator' data-slide-to='2'></li>
              <li data-target='#carouselIndicator' data-slide-to='3'></li>
            </ol>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img className='d-block w-100' src={image1} alt='students' />
              </div>
              <div className='carousel-item'>
                <img className='d-block w-100' src={image2} alt='students' />
              </div>
              <div className='carousel-item'>
                <img className='d-block w-100' src={image3} alt='students' />
              </div>
              <div className='carousel-item'>
                <img className='d-block w-100' src={image4} alt='students' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
