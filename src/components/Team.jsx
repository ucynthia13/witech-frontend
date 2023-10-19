import React from 'react'
import image3 from '../assets/image3.jpg'
function Team() {
    const styles = `
    .image-flip:hover .backside,
    .image-flip.hover .backside {
        
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        -o-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        transform: rotateY(0deg);
        
    }
    
    .image-flip:hover .frontside,
    .image-flip.hover .frontside {
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }
    
    .mainflip {
        -webkit-transition: 1s;
        -webkit-transform-style: preserve-3d;
        -ms-transition: 1s;
        -moz-transition: 1s;
        -moz-transform: perspective(1000px);
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transition: 1s;
        transform-style: preserve-3d;
        position: relative;
    }
    
    .frontside {
        -webkit-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        z-index: 2;
    }
    
    .backside {
        position: absolute;
        top: 0;
        left: 0;
        background: white;
        -webkit-transform: rotateY(-180deg);
        -moz-transform: rotateY(-180deg);
        -o-transform: rotateY(-180deg);
        -ms-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
        
    }
    
    .frontside,
    .backside {
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -ms-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: 1s;
        -webkit-transform-style: preserve-3d;
        -moz-transition: 1s;
        -moz-transform-style: preserve-3d;
        -o-transition: 1s;
        -o-transform-style: preserve-3d;
        -ms-transition: 1s;
        -ms-transform-style: preserve-3d;
        transition: 1s;
        transform-style: preserve-3d;
    }
    .vertical-line {
        content: "";
        display: inline;
        width: 100%;
        border-left: 2px solid #000; 
        margin-right: 10px; 
      }
    `
  return (
    <div className='container mt-5'>
        <style>{styles}</style>
        <div className='row align-items-center g-5 d-flex justify-content-center'>
            <p className='mt-5 text-center'>Expert people</p>
            <p className='mt-2 h3 fw-bold text-center heading-color'>Meet Our Team</p>
            <p className='mt-2 h5 text-center mb-5 fw-light'>This letter serves to confirm that Aline Niyomungeli <span className='d-block'>was sponsored by Imbuto Foundation during her seco <span className='d-block'>Byimana from senior 2 to senior 3 through</span></span></p>
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