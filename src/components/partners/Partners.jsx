import React from 'react';
import nesa from '../../assets/nesa-removebg-preview.png';
import rca2 from '../../assets/rca-removebg-preview.png';
import rdb from '../../assets/rdb-removebg-preview.png';

function Partners() {
  return (
    <div className='container mt-'>
      <div className='row mt-'>
        <div className='col-12 d-flex justify-content-center ms-4'>
          <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
            <img
              src={nesa}
              className='mx-4 img-fluid '
              style={{ maxWidth: '300px', maxHeight: '100px' }}
              alt='nesa'
              loading='lazy'
            ></img>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
            <img
              src={rdb}
              className='mx-4 img-fluid'
              style={{ maxWidth: '300px', maxHeight: '100px' }}
              alt='rdb'
              loading='lazy'
            ></img>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
            <img
              src={rca2}
              className='mx-4 img-fluid'
              style={{ maxWidth: '100px', maxHeight: '100px' }}
              alt='rca'
              loading='lazy'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
