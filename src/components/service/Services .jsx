import React from 'react';
import image2 from '../../assets/image2.jpg';

const styles = `
  .hover-effect {
    transition: transform 0.2s, box-shadow 0.2s; 
    box-shadow: 0 5px 5px 5px rgba(75, 0, 130, 0.2);
  }
  
  .hover-effect:hover {
    transform: scale(1.05); 
    box-shadow: 0 5px 5px 5px rgba(75, 0, 130, 0.2);
  }
  
`

function Services() {
  return (
    <div className='container mt-4'>
        <style>{styles}</style>
      <div className='row'>
        <h5 className='text-center mt-5'>Services</h5>
        <h1 className='h2 text-center mb-4 pb-4 fw-bold'>Our <span className='heading-color'>Special </span>Services</h1>

        <div className='col-lg-4 mt-4'>
          <div className='card hover-effect'>
            <img src={image2} className='img-fluid card-img-top' alt='students' />
            <div className='card-body'>
              <h5 className='card-title text-center'>Training in Schools</h5>
              <p className=' text-center '>
                Under the leadership of her excellency the first lady of rwanda, Mrs. Jeanette Kagame, In 2003, Imbuto Foundation
              </p>
              <div className='d-flex justify-content-center'>
                <a className='btn btn-outline-secondary mt-2 mb-3 button-background px-4' href='#'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mt-4'>
          <div className='card hover-effect'>
            <img src={image2} className='img-fluid card-img-top' alt='students' />
            <div className='card-body'>
              <h5 className='card-title text-center'>Tutoring Students</h5>
              <p className=' text-center'>
                Under the leadership of her excellency the first lady of rwanda, Mrs. Jeanette Kagame, In 2003, Imbuto Foundation
              </p>
              <div className='d-flex justify-content-center'>
                <a className='btn btn-outline-secondary mt-2 mb-3 button-background px-4' href='#'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mt-4 '>
          <div className='card hover-effect'>
            <img src={image2} className='img-fluid card-img-top' alt='students' />
            <div className='card-body'>
              <h5 className='card-title text-center'>Training Staff Computer</h5>
              <p className='text-center'>
                Under the leadership of her excellency the first lady of rwanda, Mrs. Jeanette Kagame, In 2003, Imbuto Foundation
              </p>
              <div className='d-flex justify-content-center'>
                <a className='btn btn-outline-secondary mt-2 mb-3 button-background px-4' href='#'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
