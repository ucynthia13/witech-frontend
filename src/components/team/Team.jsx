import React from 'react'
import './Team.css'
import image3 from '../../assets/image3.jpg'

function Team() {
  return (
    <div className='container mt-5'>
        <div className='row align-items-center g-5 d-flex justify-content-center'>
            <p className='mt-5 text-center'>Expert people</p>
            <p className='mt-2 h3 fw-bold text-center heading-color'>Meet Our Team</p>
            <p className='mt-2 text-center mb-5'>This letter serves to confirm that Aline Niyomungeli <span className='d-block'>was sponsored by Imbuto Foundation during her seco <span className='d-block'>Byimana from senior 2 to senior 3 through</span></span></p>
            <div className='col-lg-3'>
                <div className='image-flip'>
                    <div className='mainflip flip-0'>
                        <div className='frontside'>
                            <div className='card'>
                                <img className='card-img-top img-fluid mx-lg-auto' src={image3}></img>
                                <p className='card-title text-center pt-3 pb-2'>Mike Yvzan</p>
                                
                            </div>
                        </div>
                        <div className='backside'>
                            <div className='card'>
                            <img src={image3} className='img-fluid card-img-top' alt='students'></img>
                                <p className='card-text pt-3 pb-2'>Mike Yvan, FrontEnd Developer, More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-3'>
                <div className='image-flip'>
                    <div className='mainflip flip-0'>
                        <div className='frontside'>
                            <div className='card'>
                                <img className='card-img-top img-fluid mx-lg-auto rounded' src={image3}></img>
                                <p className='card-title text-center pt-3 pb-2'>Mike Yvzan</p>
                            </div>
                        </div>
                        <div className='backside'>
                            <div className='card'>
                            <img src={image3} className='img-fluid card-img-top' alt='students'></img>
                                <p className='card-text pt-3 pb-2'>Mike Yvan, FrontEnd Developer, More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-3'>
                <div className='image-flip'>
                    <div className='mainflip flip-0'>
                        <div className='frontside'>
                            <div className='card'>
                                <img className='card-img-top img-fluid mx-lg-auto rounded' src={image3}></img>
                                <p className='card-title text-center pt-3 pb-2'>Mike Yvzan</p>
                            </div>
                        </div>
                        <div className='backside'>
                            <div className='card'>
                            <img src={image3} className='img-fluid card-img-top' alt='students'></img>
                                <p className='card-text pt-3 pb-2'>Mike Yvan, FrontEnd Developer, More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className='mt-5'></hr>
    </div>
  )
}

export default Team