import React from 'react'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg mt-3'>
        <div className='collapse navbar-collapse d-flex justify-content-center'>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link mx-4 " href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mx-4" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mx-4" href="#">Activities</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mx-4" href="#">Gallery</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mx-4" href="#">Contact</a>
                </li>
                <button className='btn btn-success border-0 rounded-pill mx-4 px-4'>Join Us</button>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar