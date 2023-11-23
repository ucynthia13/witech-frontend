import React, { useState } from 'react'
import curve from '../../assets/shape.png'
import cynthia from '../../assets/team/UMWALICynthia.jpeg'
import aline from '../../assets/team/NIYOMUNGELIAline.jpeg'
import ruth from '../../assets/team/NKUBITOYIMANZIRuth.jpeg'
import igor from '../../assets/team/BISIZIMUHIREIghor.jpeg'
import divine from '../../assets/team/INGABIREDivine.jpeg'
import regis from '../../assets/team/NDIZIHIWERegis.jpeg'


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
                      style={{ width: '150px', height: 'auto', transform: 'rotate(3deg)', marginLeft: '350px'}}
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
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg" alt="wrapkit" class="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h6 class="mt-4 mb-0 fw-bold">Aline Niyomungeli</h6>
              <p class=" mb-3 heading-color">CEO</p>
              <p className='team-font-size'>You can relay on our amazing features list and also our customer services also our customer services</p>
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
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg" alt="wrapkit" class="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h6 class="mt-4 mb-0 fw-bold">Nkubitoyimanzi Ruth</h6>
              <p class="heading-color">CTO</p>
              <p className='team-font-size'>You can relay on our amazing features list and also our customer services also our customer services</p>
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
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg" alt="wrapkit" class="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h6 class="mt-4 mb-0 fw-bold">Ingabire Divine</h6>
              <p class="subtitle mb-3 heading-color">Developer</p>
              <p className='team-font-size'>You can relay on our amazing features list and also our customer services also our customer services</p>
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
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg" alt="wrapkit" class="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h6 class="mt-4 mb-0 fw-bold">Cynthia Umwali</h6>
              <p class="subtitle mb-3 heading-color">COO</p>
              <p className='team-font-size'>You can relay on our amazing features list and also our customer services</p>
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
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg" alt="wrapkit" class="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h6 class="mt-4 mb-0 fw-bold">Bisizi Ighor</h6>
              <p class="subtitle mb-3 heading-color">CTO</p>
              <p className='team-font-size'>You can relay on our amazing features list and also our customer services</p>
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
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg" alt="wrapkit" class="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h6 class="mt-4 mb-0 fw-bold">Ndizihiwe Regis</h6>
              <p class="subtitle mb-3 heading-color">CTO</p>
              <p className='team-font-size'>You can relay on our amazing features list and also our customer services</p>
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
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg" alt="wrapkit" class="img-fluid rounded-circle" style={{ width: '200px', height: '200px' }}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h6 class="mt-4 mb-0 fw-bold">Ngabo Iris</h6>
              <p class="subtitle mb-3 heading-color">CTO</p>
              <p className='team-font-size'>You can relay on our amazing features list and also our customer services</p>
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