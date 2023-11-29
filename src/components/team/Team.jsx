import React, { useState } from 'react'
import curve from '../../assets/shape.png'
import cynthia from '../../assets/team/UMWALICynthia.jpeg'
import aline from '../../assets/team/NIYOMUNGELIAline.jpeg'
import ruth from '../../assets/team/NKUBITOYIMANZIRuth.jpeg'
import igor from '../../assets/team/BISIZIMUHIREIghor.jpeg'
import divine from '../../assets/team/INGABIREDivine.jpeg'
import regis from '../../assets/team/NDIZIHIWERegis.jpeg'
import iris from '../../assets/team/NGABOIris.jpeg'


function Team() {
    
  return (
<div class="py-5 text-font">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-7 text-center">

      <p className='h2 text-center mb-2 fw-bolder'>
          Meet <span className='heading-color'><span> Our Team</span>
          <img
                      className='d-block mt-1'
                      src={curve}
                      
                      alt="Headline curve"
                      style={{ width: '170px', height: 'auto', transform: 'rotate(3deg)', marginLeft: '330px'}}
              />
          </span>
        
        </p>
        <p className='text-center text-font-size mb-5 team-font-size'>This letter confirms that Aline Niyomungeli <span className='d-block'>was sponsored by Imbuto Foundation during her seco</span></p>
      </div>
    </div>
    <div class="row">
      {/* <!-- column  --> */}
      <div class="col-lg-3 mb-4">
        {/* <!-- Row --> */}
        <div class="row">
          <div class="col-md-12 text-center">
            <img src={aline} alt="wrapkit" class="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h6 class="mt-4 mb-0 fw-bold">Aline Niyomungeli</h6>
              <p class=" mb-3 heading-color">CEO</p>
              <p className='team-font-size'>Passionate leader with a focus on delivering exceptional results. You can relay on our amazing features list and also our customer services also our customer services</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Row --> */}
      </div>
      {/* <!-- column  --> */}
      {/* <!-- column  --> */}
      <div class="col-lg-3 mb-4">
        {/* <!-- Row --> */}
        <div class="row">
          <div class="col-md-12 text-center">
            <img src={ruth} alt="wrapkit" class="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h6 class="mt-4 mb-0 fw-bold">Nkubitoyimanzi Ruth</h6>
              <p class="heading-color">CTO</p>
              <p className='team-font-size'>Innovative Chief Technology Officer dedicated to driving technological advancements and ensuring excellence in our services.</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Row --> */}
      </div>
      {/* <!-- column  -->
      <!-- column  --> */}
      <div class="col-lg-3 mb-4">
        {/* <!-- Row --> */}
        <div class="row">
          <div class="col-md-12 text-center">
            <img src={divine} alt="wrapkit" class="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h6 class="mt-4 mb-0 fw-bold">Ingabire Divine</h6>
              <p class="subtitle mb-3 heading-color">Developer</p>
              <p className='team-font-size'>Creative developer contributing to the success of our projects. You can relay on our amazing features list and also our customer services also our customer services</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Row --> */}
      </div>
      {/* <!-- column  -->
      <!-- column  --> */}
      <div class="col-lg-3 mb-4">
        {/* <!-- Row --> */}
        <div class="row">
          <div class="col-md-12 text-center">
            <img src={cynthia} alt="wrapkit" class="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h6 class="mt-4 mb-0 fw-bold">Cynthia Umwali</h6>
              <p class="subtitle mb-3 heading-color">COO</p>
              <p className='team-font-size'>Strategic Chief Operating Officer committed to operational excellence and providing top-notch customer services.</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Row --> */}
      </div>
      <div className='row text-center team2'>
      <div class="col-lg-3 mb-4">
        {/* <!-- Row --> */}
        <div class="row ms-5 ps-4 ">
          <div class="col-md-12 ">
            <img src={igor} alt="wrapkit" class="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h6 class="mt-4 mb-0 fw-bold">Bisizi Ighor</h6>
              <p class="subtitle mb-3 heading-color">CTO</p>
              <p className='team-font-size'>Results-driven Chief Technology Officer focused on leveraging technology for our continued success. </p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Row --> */}
      </div>

 {/* <!-- column  -->
      <!-- column  --> */}
      <div class="col-lg-3 mb-4">
        {/* <!-- Row --> */}
        <div class="row ms-5 ps-4">
          <div class="col-md-12 ">
            <img src={regis} alt="wrapkit" class="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h6 class="mt-4 mb-0 fw-bold">Ndizihiwe Regis</h6>
              <p class="subtitle mb-3 heading-color">CTO</p>
              <p className='team-font-size'>Experienced Chief Technology Officer ensuring the technological backbone of our organization remains robust</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Row --> */}
      </div>

 {/* <!-- column  -->
      <!-- column  --> */}
      <div class="col-lg-3 mb-4">
        {/* <!-- Row --> */}
        <div class="row ms-5 ps-4">
          <div class="col-md-12">
            <img src={iris}alt="wrapkit" class="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h6 class="mt-4 mb-0 fw-bold">Ngabo Iris</h6>
              <p class="subtitle mb-3 heading-color">CTO</p>
              <p className='team-font-size'>Innovative Chief Technology Officer dedicated to driving technological advancements and ensuring excellence.</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Row --> */}
      </div>
      </div>
      
    </div>
  </div>
</div>
  )
}

export default Team