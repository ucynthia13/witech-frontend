import React, { useEffect, useState } from 'react';
import image1 from '../../assets/ramb2.jpg';
import image2 from '../../assets/ramb1.jpg';
import image3 from '../../assets/IMG_0501.jpg';
import curve from '../../assets/shape.png'
import LearnMore from '../../assets/icons/LearnMore';
import { useNavigate } from 'react-router-dom';

function Stories() {
  const navigate = useNavigate();


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

  // useEffect(() => {
  //   const timer = setInterval(nextSlide, 4000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [currentSlide]);

  return (
    <div className='container text-font' id='activities'>
      <div className='row'>
        <h5 className='text-center h6 mt-4 mb-3'>Stories</h5>
        <p className='h2 text-center mb-4 fw-bolder'>
          Read <span className='heading-color'><span> Our Blogs</span>
          <img
                      className='d-block mt-1'
                      src={curve}
                      
                      alt="Headline curve"
                      style={{ width: '200px', height: 'auto', transform: 'rotate(3deg)', marginLeft: '600px'}}
              />
          </span>
        
        </p>

        <div className='col-lg-4 mt-4'>
          <div className='card border-0 hover-effect card-height'>
            <img src={image1} className='img-fluid card-img-top' alt='students' />
            <div className='card-body'>
              <h5 className='card-title text-center fw-bold my-2'>{divs[currentSlide].title}</h5>
              <p className='text-center team-font-size'>{divs[currentSlide].description}</p>
              <div  onClick={()=>navigate("/article")} className='d-flex justify-content-center'>

                <LearnMore />
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mt-4'>
          <div className='card border-0 hover-effect card-height'>
            <img src={image2} className='img-fluid card-img-top' alt='students' />
            <div className='card-body'>
              <h5 className='card-title text-center fw-bold my-2'>{divs[currentSlide].title}</h5>
              <p className='text-center team-font-size'>{divs[currentSlide].description}</p>
              <div className='d-flex justify-content-center'>
                <LearnMore />
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mt-4'>
          <div className='card border-0 hover-effect card-height'>
            <img src={image3} className='img-fluid card-img-top' alt='students' />
            <div className='card-body'>
              <h5 className='card-title text-center fw-bold my-2'>{divs[currentSlide].title}</h5>
              <p className=' text-center team-font-size'>{divs[currentSlide].description}</p>
              <div className='d-flex justify-content-center'>
                <LearnMore />
              </div>
            </div>
          </div>
       
       </div>

        <div className='col-lg-12 mt-4 text-end'> 
          <button className='btn btn-secondary rounded-circle button-background me-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stories;
