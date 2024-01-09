import React from 'react';
import logo from '../../assets/Group 2.png';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg pt-4 pb-4 '>
      <a className="navbar-brand ms-5 ps-5 " href="#">
        <img src={logo} alt='logo' style={{ width: '100px', height: 'auto' }} className='ms-5'></img>
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse team-font-size' id='navbarNav'>
        <ul className='navbar-nav fw-bold'>
          <li className='nav-item active'>
            <a className='nav-link ms-4 me-4 link-with-underline' href='#'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link mx-4 link-with-underline' href='#about'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link mx-4 link-with-underline' href='#activities'>
              Activities
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link mx-4 link-with-underline' href='#blog'>
              Blog
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link mx-4 link-with-underline' href='#gallery'>
              Gallery
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link ms-4 mx-5 link-with-underline' href='#contact'>
              Contact
            </a>
          </li>
          <button className='btn btn-outline-secondary rounded-pill mx-5 mb-2 px-5 button-background'>
            Join Us
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
