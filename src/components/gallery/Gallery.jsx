import React, { useEffect, useState } from 'react'
import image1 from '../../assets/IMG_0181.jpg'
import image2 from '../../assets/IMG_0191.jpg'
import image3 from '../../assets/IMG_0204.jpg'
import image4 from '../../assets/IMG_0234.jpg' 
import image5 from '../../assets/IMG_0220.jpg' 
import image6 from '../../assets/IMG_0387.jpg' 
import More from '../../assets/icons/More'
import curve from '../../assets/shape.png'


function Gallery() {
    const imageSet1 = [ image1, image2, image3, image4, image5, image6 ]

    const [currentSlide, setCurrentSlide ] = useState(imageSet1)

  return (
    <div className='container text-font mt- pt-' id='gallery'>
        <div className='row'>
            <p className='h3 fw-bold'>Explore<span className='d-block mt-2 mb-1 heading-color'>Full Gallery</span>
            <img
                      className='d-block mb-5'
                      src={curve}                 
                      alt="Headline curve"
                      style={{ width: '200px', height: 'auto', transform: 'rotate(3deg)', marginLeft: '0px'}}
              />
            </p> 

            {currentSlide.map((image, index) => (
            <div className='hover col-lg-4' key={index}>
                <div className='card mb-3 hover-effect'>
                    <img src={image} className='card-img-top img-fluid' alt={`Image ${index + 1}`} style={{ width: '', height: ''}} ></img>
                </div>
            </div>
            ))}
        </div>
        <div className='row'>
        <div className='col-lg-12 mt-3 text-end'> 
          <button className='btn btn-secondary rounded-circle button-background me-3'>
            <More />
          </button>
        </div>
        </div>

    </div>
  )
}

export default Gallery