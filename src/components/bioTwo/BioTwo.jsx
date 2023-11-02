import React from 'react';
import curve from '../../assets/shape.png'

function BioTwo() {
  const styles = `
    .icon {
      counter-reset: section ; /* Set counter to 0 initially */
      border-left: solid 1px rgb(116, 22, 198);
      border-style: dotted;
      border-right: none;
      border-top: none;
      border-bottom: none;
      margin-top: 0px;
      padding-left: 40px;
      padding-right: 50px;
      margin-left: 30px;
      position: relative;
    }
    .icon::before {
      counter-increment: section;
      content: counter(section);
      position: absolute;
      left: -22px;
      top: 0;
      border-radius: 50%;
      height: 40px;
      width: 40px;
      background: rgb(116, 22, 198);
      color: white;
      font-size: 16px;
      font-weight: bold;
      line-height: 40px;
      text-align: center;
    }
    .icon .fw-bold {
      font-size: 16px;
      color: #333; /* Customize the color */
    }
    .icon .d-block {
      font-size: 15px;
    }
  `;

  return (
    <div className="container mt-5 text-font">
      <style>{styles}</style>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 blob3">
          
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <p className="fw-bold h2 mb-5">
            Mentoring 
            <span className=""> Our Students In A</span> 
              <span className="heading-color d-block mt-4">3-Part Process</span> 
              <img
                      className='d-block'
                      src={curve}
                      
                      alt="Headline curve"
                      style={{ width: '210px', height: 'auto', transform: 'rotate(3deg)', marginLeft: '0px'}}
              />
          </p>
          <div className="">
            <div className="mb-3">
              <div className="text-start icon">
                <span className="fw-bold h5 ms-4">Computer Basics</span>
                <span className="d-block ms-4 my-4 text-font-size">
                  Acquire a solid understanding of computer fundamentals, including operating systems, file management, and web development
                </span>
              </div>
              <div className="text-start icon">
                <span className="fw-bold h5 ms-4">Coding Fundamentals</span>
                <span className="d-block ms-4 my-4 team-font-size">
                  Master the basics of programming, covering essential languages and key concepts like variables, loops, and functions
                </span>
              </div>
              <div className="text-start icon">
                <span className="fw-bold h5 ms-4">Practical Application</span>
                <span className="d-block ms-4 my-4 team-font-size">
                  Apply your knowledge through teamwork, collaboration, and real-world projects that reinforce coding skills and benefit the
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioTwo;
