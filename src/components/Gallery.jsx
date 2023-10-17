import React from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'

function Gallery() {
  return (
    <div className='container mt-5 pt-5'>
        <div className='row'>
            <p className='h2 fw-bold'>Explore<span className='d-block mb-3'>Full Gallery</span></p>
            <div className='col-lg-4'>
                <div className='card mb-3'>
                    <img src={image1} className='card-img-top'></img>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='card'>
                    <img src={image2} className='card-img-top'></img>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='card'>
                    <img src={image2} className='card-img-top'></img>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-4 '>
                <div className='card'>
                    <img src={image1} className='card-img-top'></img>
                </div>
            </div>
            <div className='col-lg-4 '>
                <div className='card'>
                    <img src={image1} className='card-img-top'></img>
                </div>
            </div>
            <div className='col-lg-4 '>
                <div className='card'>
                    <img src={image1} className='card-img-top'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery