import React from 'react'
import nesa from '../../assets/nesa-removebg-preview.png'
import rca2 from '../../assets/rca-removebg-preview.png'
import rdb from '../../assets/rdb-removebg-preview.png'
function Partners() {
  return (
    <div className='container mt-'>
        <div className='row mt-'>
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