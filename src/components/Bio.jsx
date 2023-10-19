import React from 'react'
import image3 from '../assets/image3.jpg'

function Bio() {
  
  return (
    <div className='container mt-5 pt-4'>
        <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
        <div className='col-lg-6'>
            <h2 className='fw-bold mb-4 heading-color'>We provide you the best <span className='d-block'>training to students</span></h2>
              <p className='lead'>Empowering tommorrow's Tech Leaders with quality education, comphrehensive software training programs, cutting edge curricula, and a commitment to excellence</p>
            <div className='row'>
                <div className='col'>
                <p className='text-center'><span className='d-block fw-bolder mt-4 mb-2 h3 heading-color'>2+</span> <span className='d-block'>years of</span><span className='d-block'>experience</span></p>
                </div>
                <div className='col'>
                <p className='text-center'><span className='d-block fw-bolder mt-4 mb-2 h3 heading-color'>100</span> <span className='d-block'>Experienced</span><span className='d-block'>Mentors</span></p>
                </div>
                <div className='col'>
                <p className='text-center'><span className='d-block fw-bolder mt-4 mb-2 h3 heading-color'>200+</span> <span className='d-block'>Trained</span><span className='d-block'>Students</span></p>
                </div>
            </div>
            <a className='btn btn-outline-secondary ms-4 px-5 py-2 mt-3 button-background' href='#'>Learn More</a>
        </div>
        <div className='col-10 col-sm-8 col-lg-6 pt-4'>
          <img src={image3} className='d-block mx-lg-auto img-fluid rounded'></img>
        </div>

    
  </div>

  </div>
  )
}

export default Bio