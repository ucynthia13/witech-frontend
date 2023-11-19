import React from 'react'
import curve from '../../assets/shape.png'
import hero from '../../assets/heroo.png'

function Bio() {
  return (
    <div className='container mt-5 pt-4 text-font' id='about'>
        <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
          <p className='h6 text-center'>Why Us?</p>
        <div className='col-lg-6'>
            <p className='fw-bold mb-4 h2'>We Provide You <span className='heading-color'> The Best 
               <img
                      className='d-block'
                      src={curve}
                      
                      alt="Headline curve"
                      style={{ width: '140px', height: 'auto', transform: 'rotate(4deg)', marginLeft: '260px'}}
                />
               </span>
               <span className='mt-2 d-block'>
                Training To Students
                </span>
            </p>
              <p className=' ms-3 text-font-size'>Empowering tommorrow's Tech Leaders with quality education, comphrehensive software training programs, cutting edge curricula, and a commitment to excellence</p>
            <div className='row'>
                <div className='col'>
                <p className='text-center'><span className='d-block fw-bolder mt-4 mb-2 h3 heading-color'>2+</span> <span className='d-block text-font-size'>years of</span><span className='d-block text-font-size'>experience</span></p>
                </div>
                <div className='col'>
                <p className='text-center'><span className='d-block fw-bolder mt-4 mb-2 h3 heading-color'>100</span> <span className='d-block text-font-size'>Experienced</span><span className='d-block text-font-size'>Mentors</span></p>
                </div>
                <div className='col'>
                <p className='text-center'><span className='d-block fw-bolder mt-4 mb-2 h3 heading-color'>200+</span> <span className='d-block text-font-size'>Trained</span><span className='d-block text-font-size'>Students</span></p>
                </div>
            </div>
            <a className='btn btn-outline-secondary ms-4 px-5 py-2 mt-3 button-background text-font-size' href='#'>Learn More</a>
        </div>
        <div className='col-10 col-sm-8 col-lg-6 pt-4 blob2'>

        </div>

  </div>
 
  </div>
  )
}

export default Bio