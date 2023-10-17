import React from 'react'
import image2 from '../assets/image2.jpg'
function Stories () {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <h5 className='text-center mt-5 fw-light'>Stories</h5>
            <h1 className='h2 text-center mb-4 pb-4 fw-bold mt-2'>Read Our <span className='border px-2'>Blog</span></h1>

            <div className='col-lg-4 mt-4'>
                <div className='card'>
                    <img src={image2} className='img-fluid card-img-top' alt='students'></img>
                    <div className='card-body'>
                        <h5 className='card-title text-center'>Training in Schools</h5>
                        <p className='lead text-center'>Under the leadership of her excellency the first lady of rwanda, Mrs. Jeanette Kagame, In 2003, Imbuto Foundation</p>
                        <div className='d-flex justify-content-center'>
                            <a className='btn btn-outline-secondary my-2' href='#'>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-lg-4 mt-4'>
                <div className='card'>
                    <img src={image2} className='img-fluid card-img-top' alt='students'></img>
                    <div className='card-body'>
                        <h5 className='card-title text-center'>Tutoring Students</h5>
                        <p className='lead text-center'>Under the leadership of her excellency the first lady of rwanda, Mrs. Jeanette Kagame, In 2003, Imbuto Foundation</p>
                        <div className='d-flex justify-content-center'>
                            <a className='btn btn-outline-secondary my-2' href='#'>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-lg-4 mt-4'>
                <div className='card'>
                    <img src={image2} className='img-fluid card-img-top' alt='students'></img>
                    <div className='card-body'>
                        <h5 className='card-title text-center'>Training Staff Computer</h5>
                        <p className='lead text-center'>Under the leadership of her excellency the first lady of rwanda, Mrs. Jeanette Kagame, In 2003, Imbuto Foundation</p>
                        <div className='d-flex justify-content-center'>
                            <a className='btn btn-outline-secondary my-2 px-2' href='#'>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stories