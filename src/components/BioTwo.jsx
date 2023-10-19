import React from 'react'
import image4 from '../assets/image4.jpg'

function BioTwo() {

  return (
    <div className='container mt-5'>
        <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
            <div className='col-10 col-sm-8 col-lg-6 blob3'>
                <img src={image4} className='d-block mx-lg-auto img-fluid rounded'></img>
            </div>
            <div className='col-10 col-sm-8 col-lg-6'>
                <p className='fw-bold h2 mb-5 heading-color'>Mentoring Our Coding Students In A 3-Part Process</p>
                <ul className='list-group'>
                    <li className='list-group-item mb-2'>
                        <p className='text-start ms-5'><span className='d-block fw-bold h4 mb-3'>Computer Basics</span><span className='d-block lead fw-light'>Acquire a solid understanding of computer fundamentals, including operation systems, file management, and web development</span></p>
                    </li>
                    <li className='list-group-item mb-2'>
                        <p className='text-start ms-5'><span className='d-block fw-bold h4 mb-3'>Coding Fundamentals</span><span className='d-block lead fw-light'>Master the basics of programming, covering essential languages and key concepts like variables, loops and functions</span></p>
                    </li>
                    <li className='list-group-item'>
                    <p className='text-start ms-5'><span className='d-block fw-bold h4 mb-3'>Practical Application</span><span className='d-block lead fw-light'>Apply your knowledge through teamwork, collaboration, and real-world projects that reinforce coding skills and benefit the community</span></p>
                    </li>
                </ul>
            </div>
        </div>
        <hr className='mt-5'></hr>
    </div>

  )
}

export default BioTwo