import React, { useEffect, useState } from 'react'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import More from '../../assets/icons/More'


function Gallery() {
    const imageSet1 = [ image1, image2, image3, image4, image1, image2 ]
    const imageSet2 = [ image4, image3, image2, image1, image1, image2 ]

    const [currentSlide, setCurrentSlide ] = useState(imageSet1)

  return (
    <div className='container text-font mt-5 pt-5' id='gallery'>
        <div className='row'>
            <p className='h3 fw-bold'>Explore<span className='d-block mb-4 heading-color'>Full Gallery</span></p>

            {currentSlide.map((image, index) => (
            <div className='hover col-lg-4' key={index}>
                <div className='card mb-3 hover-effect'>
                    <img src={image} className='card-img-top img-fluid' alt={`Image ${index + 1}`}></img>
                </div>
            </div>
            ))}
        </div>
        <div className='row'>
        <div className='col-lg-12 mt-4 text-end'> 
          <button className='btn btn-secondary rounded-circle button-background'>
            <More />
          </button>
        </div>
        </div>


        <hr className='mt-5'></hr>
    </div>
  )
}

export default Gallery