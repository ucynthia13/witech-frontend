import React, { useEffect, useState } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';


function Community() {
    const customStyles = `
        .image-border: {
            border-radius: 0px 50px 0px 50px;
        }
    `
  const images = [image1, image2, image3, image4];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((activeImage + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    }
  }, [activeImage]);

  const divs = Array.from({ length: 9 }, (_, index) => (
    <div key={index} className='image-div p-3'>
      <img src={images[activeImage]} className='d-block w-100 mx-3' alt={`Image ${index + 1}`} style={{ borderRadius: '0px 20px 0px 20px' }}/>
    </div>
  ));

  return (
    <div className='container mt-5'>
        <style>{customStyles}</style>
      <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
        <p className='fw-light h6 text-center'>COMMUNITY</p>
        <div className='col-lg-6'>
          <div id='imageCarousel' className='row'>
            <div className='col-12 d-flex m-3 justify-content-center'>
              {divs.slice(0, 3)}
            </div>
            <div className='col-12 d-flex'>
              {divs.slice(2, 6)}
            </div>
            <div className='col-12 d-flex'>
              {divs.slice(7, 9)}
            </div>
          </div>
        </div>

        <div className='col-lg-6'>
          <p className='text-start fw-bold h2 mt-2'>Growing Slack<span className='d-block'>Community</span></p>
          <p className='fw-light lead mt-4'>
            Start an amazing journey; Join our thriving Slack community, where we connect, share knowledge, and make progress together. You're invited to be part of our growing community and help us shape it.
          </p>
          <a className='btn btn-outline-secondary px-4 py-2 mt-4' href='#'>Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default Community;
