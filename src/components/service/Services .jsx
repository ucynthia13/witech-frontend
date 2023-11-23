import React, { useState } from 'react';
import image2 from '../../assets/image2.jpg';
import curve from '../../assets/shape.png'
import LearnMore from '../../assets/icons/LearnMore';
import services from '../../assets/data/services';


function Services() {

  const [service, setService] = useState(services);

  return (
    <div className='container mt-5 pt-2 text-font'>
      <div className='row'>
        {/* <h6 className='text-center mt-5'>Services</h6> */}
        <p className='h2 text-center mb-4 fw-bold'>
          Our <span className='heading-color'><span> Services</span>
          <img
                      className='d-block mt-1'
                      src={curve}
                      
                      alt="Headline curve"
                      style={{ width: '150px', height: 'auto', transform: 'rotate(3deg)', marginLeft: '600px'}}
              />
          </span>
        
        </p>
        

        {service.map((service, index) => (
          <div className='col-lg-4 mt-4' key={index}>
            <div className='card border-0 hover-effect card-height'>
              <img src={service.image} className='img-fluid card-img-top' alt='students' />
              <div className='card-body'>
                <h5 className='card-title text-center fw-bold my-2'>{service.title}</h5>
                <p className='text-center team-font-size'>
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
