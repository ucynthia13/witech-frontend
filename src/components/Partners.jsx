import React from 'react'
import nesa from '../assets/nesa.png'
import rca2 from '../assets/rca2.jpg'
import rdb from '../assets/rdb.jpg'
function Partners() {
  return (
    <div className='container mt-4'>
        <div className='row mt-4'>
            <div className='col-12 d-flex justify-content-center ms-4'>
                <div className=''>
                    <img src={nesa} className='mx-4 img-fluid' style={{ maxWidth: '300px', maxHeight: '100px' }} alt='nesa'></img>
                </div>
                <div className='' >
                    <img src={rdb} className='mx-4 img-fluid' style={{ maxWidth: '300px', maxHeight: '100px' }} alt='rdb'></img>
                </div>
                <div className='' >
                    <img src={rca2} className='mx-4 img-fluid' style={{ maxWidth: '100px', maxHeight: '100px' }} alt='rca'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners