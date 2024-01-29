import React from 'react';
import curve from '../../assets/shape.png'

function BioTwo() {
  
  const styles = `
    .container{
      counter-reset: section;
    }
    .icon {
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
      color: #333;
    }
    .icon .d-block {
      font-size: 15px;
    }
  `;

  return (
    <div className="container mt-5 text-font">
      <style>{styles}</style>
      <div className="row flex-lg-row align-items-center g- py-5">
        <div className="col-10 col-sm-8 col-lg-6 mx-4">
          <p className="fw-bold h2 mb-5 ">
            Mentoring Our Students In A <span className="heading-color mt-4 d-block"><span className='underlined'>3-Part Process</span></span>            
          </p>
          <div className="">
            <div className="mb-3">
              <div className="text-start icon">
                <span className="fw-bold h5 ms-4">Computer Basics</span>
                <span className="d-block ms-4 my-4 team-font-size">
                  Acquire a solid understanding of computer skills, including operating systems, file management, and web development
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
        <div className="col-10 col-sm-8 col-lg-6 blob3 rounded-3">
          
          </div>
      </div>
    </div>
  );
}

export default BioTwo;
