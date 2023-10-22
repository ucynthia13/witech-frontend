import React from 'react'
// import './Contact.css'
import FooterIcon from '../../assets/icons/FooterIcon'

function Contact() {
  return (
    <div className='container mt-5 mb-3 pt-5' id='contact'>
        <div className='row'>
            <div className='col-12 text-center'>
                <p className='fw-bold h2'> Step Into The Future Before Others?<span className='d-block mt-2 heading-color'>If Yes Let's Go !</span></p>
                <a className='btn btn-outline-secondary my-2 px-5 mt-5 button-background' href='#'>Learn More</a>
            </div>

            <div className='col-12 mt-5'>

                <div className='row'>
                    <div className='col-4 my-5'>
                        <label htmlFor='logo'><span className='fw-bold h3'>Logo</span> <span className='d-block mb-4'>Name of the company</span></label>
                        <div className='d-flex'>
                            <input className='form-control form-control-lg'></input>
                            <a className='btn btn-dark px-3 pt-2 button-background border-0' href='#'>Subscribe!</a>
                        </div>
                    </div>
                    <div className='col-2'>
                        <ul className='list-group list-unstyled ms-5 my-5'>
                            <li className='fw-bold mb-3 h5'>Partnership</li>
                            <li className='mb-3'>Schools</li>
                            <li className='mb-3'>Branding</li>
                            <li className='mb-2'>Companies</li>
                        </ul>
                    </div>
                    <div className='col-2'>
                        <ul className='list-group list-unstyled ms-5 my-5'>
                            <li className='fw-bold mb-3 h5'>Partnership</li>
                            <li className='mb-3'>Schools</li>
                            <li className='mb-3'>Branding</li>
                            <li className='mb-2'>Companies</li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <ul className='list-group list-unstyled ms-5 my-5'>
                            <li className='fw-bold mb-3 h5'>Partnership</li>
                            <li className='mb-3'>Schools</li>
                            <li className='mb-3'>Branding</li>
                            <li className='mb-2'>Companies</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='col-12 pt-3 d-flex justify-content-center heading-color'> 
                <FooterIcon />
            </div>
            <p className='h6 text-center mt-4'>@Copyright All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Contact