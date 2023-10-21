import React from 'react'

function Navbar() {
  return (

    <nav className='navbar navbar-expand-lg mt-3'>
        <div className='collapse navbar-collapse d-flex justify-content-center'>
            <ul className="navbar-nav mr-auto fw-bold">
                <li className="nav-item active">
                    <a className="nav-link mx-4 link-with-underline" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mx-4 link-with-underline" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mx-4 link-with-underline" href="#">Activities</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mx-4 link-with-underline" href="#">Gallery</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mx-4 link-with-underline" href="#">Contact</a>
                </li>
                <button className='btn btn-outline-secondary rounded-pill mx-4 mb-2 px-5 button-background'>Join Us</button>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar