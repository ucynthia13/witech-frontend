import React, { useState } from 'react';
import image2 from '../../assets/image2.jpg';
import LearnMore from '../../assets/icons/LearnMore';
import services from '../../assets/data/services';

function Services() {
  const [service, setService] = useState(services);

  return (
    <div className='container mt-4'>
      <div className='row'>
        <h5 className='text-center mt-5'>Services</h5>
        <h1 className='h2 text-center mb-4 pb-4 fw-bold'>
          Our <span className='heading-color'>Special </span>Services
        </h1>

        {service.map((service, index) => (
          <div className='col-lg-4 mt-4' key={index}>
            <div className='card hover-effect'>
              <img src={image2} className='img-fluid card-img-top' alt='students' />
              <div className='card-body'>
                <h5 className='card-title text-center'>{service.title}</h5>
                <p className='text-center'>
                  {service.description}
                </p>
                <div className='d-flex justify-content-center'>
                  <LearnMore />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
