import React from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'

function Gallery() {

    const styles = `
    .hover-effect {
        transition: transform 0.2s, box-shadow 0.2s; 
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); 
      }
      
      .hover-effect:hover {
        transform: scale(1.05); 
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); 
      }
      
    `
  return (
    <div className='container mt-5 pt-5'>
        <style>{styles}</style>
        <div className='row'>
            <p className='h2 fw-bold heading-color'>Explore<span className='d-block mb-3'>Full Gallery</span></p>
            <div className='hover col-lg-4'>
                <div className='card mb-3 hover-effect'>
                    <img src={image1} className='card-img-top img-fluid'></img>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='card hover-effect'>
                    <img src={image2} className='card-img-top'></img>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='card hover-effect'>
                    <img src={image2} className='card-img-top'></img>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-4'>
                <div className='card hover-effect'>
                    <img src={image1} className='card-img-top'></img>
                </div>
            </div>
            <div className='col-lg-4 '>
                <div className='card hover-effect'>
                    <img src={image1} className='card-img-top'></img>
                </div>
            </div>
            <div className='col-lg-4 '>
                <div className='card hover-effect'>
                    <img src={image1} className='card-img-top'></img>
                </div>
            </div>
        </div>

        <hr className='mt-5'></hr>
    </div>
  )
}

export default Gallery