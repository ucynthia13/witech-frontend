import React from 'react'
import curve from '../../assets/shape.png'
import FooterIcon from '../../assets/icons/FooterIcon'

function Contact() {
  return (
    <div className='container text-font mt-5 mb-3 pt-5' id='contact'>
        <div className='row'>
            <div className='col-12 text-center'>
                <p className='fw-bold h3'> Step Into The Future Before Others?<span className='d-block mt-3 heading-color'>If Yes Let's Go !</span>
                <img
                      className='d-block'
                      src={curve}
                      
                      alt="Headline curve"
                      style={{ width: '250px', height: 'auto', transform: 'rotate(3deg)', marginLeft: '500px'}}
              />
                </p>
                <a className='btn btn-outline-secondary my-2 px-5 py-3 mt-5 button-background' href='#'>Request Early Access</a>
            </div>

            <div className='col-12 mt-5'>

                <div className='row'>
                    <div className='col-4 my-5'>
                        <label htmlFor='logo'><span className='fw-bold h3'>Logo</span> <span className='d-block mb-4 text-font-size'>WithinTech</span></label>
                        <div className='d-flex'>
                            <input className='form-control form-control-lg'></input>
                            <a className='btn btn-dark px-4 py-3 button-background' href='#'>Subscribe!</a>
                        </div>
                    </div>
                    <div className='col-2'>
                        <ul className='list-group list-unstyled ms-5 my-5'>
                            <li className='fw-bold mb-3 h5'>Partnership</li>
                            <li className='mb-3 text-font-size'>Schools</li>
                            <li className='mb-3 text-font-size'>Branding</li>
                            <li className='mb-2 text-font-size'>Companies</li>
                        </ul>
                    </div>
                    <div className='col-2'>
                        <ul className='list-group list-unstyled ms-5 my-5'>
                            <li className='fw-bold mb-3 h5'>Partnership</li>
                            <li className='mb-3 text-font-size'>Schools</li>
                            <li className='mb-3 text-font-size'>Branding</li>
                           
                        </ul>
                    </div>
                    <div className='col-4'>
                        <ul className='list-group list-unstyled ms-5 my-5'>
                            <li className='fw-bold mb-3 h5'>Partnership</li>
                            <li className='mb-3 text-font-size'>Schools</li>
                            <li className='mb-3 text-font-size'>Branding</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='col-12 pt-3 d-flex justify-content-center heading-color'> 
                <FooterIcon />
            </div>
            <p className='text-center mt-4 text-font-size'>@Copyright All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Contact