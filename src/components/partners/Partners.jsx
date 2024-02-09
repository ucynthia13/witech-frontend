import React from 'react';

import rca2 from '../../assets/rca-removebg-preview.png';
import natcom from '../../assets/natcom-removebg-preview.png';
import sb from '../../assets/sbf-removebg-preview.png'

function Partners() {
  const partnerData = [
    { src: rca2, maxWidth: '300px', maxHeight: '100px', alt: 'rca' },
    { src: natcom, maxWidth: '100px', maxHeight: '100px', alt: 'natcom' },
    { src: sb, maxWidth: '100px', maxHeight: '100px', alt: 'sb' },
  ];

  return (
    <div className='container mt-'>
      <div className='row mt-'>
        <div className='col-12 d-flex justify-content-center ms-4'>
          {partnerData.map((partner, index) => (
            <div key={index} className='col-sm-6 col-md-4 col-lg-3 mb-4'>
              <img
                src={partner.src}
                className='mx-4 img-fluid'
                style={{ maxWidth: partner.maxWidth, maxHeight: partner.maxHeight }}
                alt={partner.alt}
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
