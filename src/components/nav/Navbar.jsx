import React from 'react'
import logo from '../../assets/Group 2.png'

function Navbar() {
    // const navigate = useNavigate();
  return (

    <nav className='navbar navbar-expand-lg mt-4'>
            <a className="navbar-brand ms-5 ps-5 " href="#" > 
                <img src={logo} alt='logo' style={{ width: '100px', height: 'auto'}} className='ms-5'></img>
            </a>
        <div className='collapse navbar-collapse d-flex justify-content-center team-font-size'>
            
            <ul className="navbar-nav fw-bold">
                <li className="nav-item active">
                    <a className="nav-link mx-4  link-with-underline " href="#">Home</a>
                </li>
      
                <li className="nav-item">
                    <a className="nav-link mx-4 link-with-underline" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mx-4 link-with-underline" href="#activities">Activities</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mx-4 link-with-underline" href="#activities">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mx-4 link-with-underline" href="#gallery">Gallery</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ms-4 me-5 pe-4 link-with-underline" href="#contact">Contact</a>
                </li>
                <button className='btn btn-outline-secondary rounded-pill mx-4 mb-2 px-5 button-background'>Join Us</button>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar