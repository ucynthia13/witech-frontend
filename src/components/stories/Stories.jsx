import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import StoryCard from './StoryCard'; 

import image1 from '../../assets/ramb2.jpg';
import image2 from '../../assets/ramb1.jpg';
import image3 from '../../assets/IMG_0501.jpg';

function Stories() {

  const navigate = useNavigate();

  const redirectToMoreBlogs = () => {
    const newWindow = window.open('https://photos.app.goo.gl/TEiTNqB6zaBe94f4A', '_blank');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  const initialDivs = [
    {
      image: image1,
      title: 'Community Learning',
      description: 'Promoting comprehensive community education, our foundation is committed to fostering a culture of lifelong learning and empowerment.',
    },
    {
      image: image2,
      title: 'Guiding Future Leaders',
      description: 'Nurturing the potential of tomorrow\'s leaders, our foundation is dedicated to providing mentorship and support for aspiring individuals striving for positive impact.',
    },
    {
      image: image3,
      title: 'Digital Literacy Advancement',
      description: 'Leading the charge in advancing digital literacy, our foundation is at the forefront of initiatives that empower individuals to thrive in the digital age.',
    },
  ];

  const [divs] = useState(initialDivs);

  return (
    <div className='container text-font' id='activities'>
      <div className='row'>
        <h5 className='text-center h6 mt-4 mb-3'>Stories</h5>
        <p className='h2 text-center mb-4 fw-bolder'>
          Read <span className='heading-color'><span className='underlined'> Our Blogs</span></span>
        </p>

        {divs.map((story, index) => (
          <div key={index} className='col-lg-4 mt-4'>
            <StoryCard story={story} />
          </div>
        ))}

        <div className='col-lg-12 mt-4 text-end'>
          <button className='btn btn-secondary rounded-circle button-background me-4' onClick={redirectToMoreBlogs}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stories;
