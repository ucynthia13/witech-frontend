import React from 'react'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg'>
        <div className='collapse navbar-collapse d-flex justify-content-center'>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <button className='btn btn-success border-0 rounded-pill'>Sign In</button>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar