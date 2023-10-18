import React, { useEffect, useState } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

function Stories() {

  const styles = `
  .hover-effect {
    transition: transform 0.2s, box-shadow 0.2s; 
  }
  
  .hover-effect:hover {
    transform: scale(1.05); 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); 
  }
  `

  const initialDivs = [
    {
      image: image1,
      title: 'Training in Schools',
      description: 'Under the leadership of her excellency the first lady of Rwanda, Mrs. Jeanette Kagame, In 2003, Imbuto Foundation',
    },
    {
      image: image2,
      title: 'Tutoring Students',
      description: 'Under the leadership of her excellency the first lady of Rwanda, Mrs. Jeanette Kagame, In 2003, Imbuto Foundation',
    },
    {
      image: image3,
      title: 'Training Staff Computer',
      description: 'Under the leadership of her excellency the first lady of Rwanda, Mrs. Jeanette Kagame, In 2003, Imbuto Foundation',
    },
  ];

  const [divs, setDivs] = useState(initialDivs);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % divs.length;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + divs.length) % divs.length;
    setCurrentSlide(prevIndex);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide]);

  return (
    <div className='container'>
      <style>{styles}</style>
      <div className='row'>
        <h5 className='text-center mt-5 fw-light'>Stories</h5>
        <h1 className='h2 text-center mb-4 pb-4 fw-bold mt-2'>Read Our <span className='border px-2'>Blog</span></h1>

        <div className='col-lg-4 mt-4'>
          <div className='card hover-effect'>
            <img src={divs[currentSlide].image} className='img-fluid card-img-top' alt='students' />
            <div className='card-body'>
              <h5 className='card-title text-center'>{divs[currentSlide].title}</h5>
              <p className='lead text-center'>{divs[currentSlide].description}</p>
              <div className='d-flex justify-content-center'>
              <a className='btn btn-outline-secondary mb-3 px-3 rounded-pill' href='#'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mt-4'>
          <div className='card hover-effect'>
            <img src={divs[currentSlide].image} className='img-fluid card-img-top' alt='students' />
            <div className='card-body'>
              <h5 className='card-title text-center'>{divs[currentSlide].title}</h5>
              <p className='lead text-center'>{divs[currentSlide].description}</p>
              <div className='d-flex justify-content-center'>
              <a className='btn btn-outline-secondary mb-3 px-3 rounded-pill' href='#'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mt-4'>
          <div className='card hover-effect'>
            <img src={divs[currentSlide].image} className='img-fluid card-img-top' alt='students' />
            <div className='card-body'>
              <h5 className='card-title text-center'>{divs[currentSlide].title}</h5>
              <p className='lead text-center'>{divs[currentSlide].description}</p>
              <div className='d-flex justify-content-center'>
                <a className='btn btn-outline-secondary mb-3 px-3 rounded-pill' href='#'>
                  Learn More
                </a>
              </div>
            </div>
          </div>

          
        </div>

        <div className='col-lg-12 mt-4 text-end'> 
          <button onClick={nextSlide} className='btn btn-secondary rounded-circle'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
          </button>
        </div>

        <hr className='mt-4'></hr>
      </div>
    </div>
  );
}

export default Stories;
