import React from 'react'

function Navbar() {
    const styles = `
    .link-with-underline {
        position: relative;
        display: inline-block;
        margin-bottom: 10px; 
      }
      
      .link-with-underline::before {
        content: '';
        position: absolute;
        bottom: -5px; 
        left: 0;
        width: 0%;
        height: 2px;
        background-color: purple; 
        transition: width 0.3s; 
      }
      
      .link-with-underline:hover::before {
        width: 100%; 
      }
      
    `
  return (

    <nav className='navbar navbar-expand-lg mt-3'>
        <style>{styles}</style>
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