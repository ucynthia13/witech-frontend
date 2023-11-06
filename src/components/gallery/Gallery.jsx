import React, { useEffect, useState } from 'react'
import image1 from '../../assets/IMG_1912.JPG'
import image2 from '../../assets/IMG_1933.JPG'
import image3 from '../../assets/IMG_E1863.JPG'
import image4 from '../../assets/IMG_1966.JPG' 
import image5 from '../../assets/IMG_E1864.JPG' 
import image6 from '../../assets/IMG_1977.JPG' 
import More from '../../assets/icons/More'
import curve from '../../assets/shape.png'


function Gallery() {
    const imageSet1 = [ image1, image2, image3, image4, image5, image6 ]

    const [currentSlide, setCurrentSlide ] = useState(imageSet1)

  return (
    <div className='container text-font mt-5 pt-4' id='gallery'>
        <div className='row'>
            <p className='h3 fw-bold'>Explore<span className='d-block mt-2 heading-color'>Full Gallery</span>
            <img
                      className='d-block mb-4'
                      src={curve}                 
                      alt="Headline curve"
                      style={{ width: '210px', height: 'auto', transform: 'rotate(3deg)', marginLeft: '0px'}}
              />
            </p>

            {currentSlide.map((image, index) => (
            <div className='hover col-lg-4' key={index}>
                <div className='card mb-3 hover-effect'>
                    <img src={image} className='card-img-top img-fluid' alt={`Image ${index + 1}`} style={{ width: '', height: '420px'}} ></img>
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