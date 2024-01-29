import React from 'react';
import LearnMore from '../../assets/icons/LearnMore';

const StoryCard = ({ story }) => {
  return (
    <div className='card border-0 hover-effect card-height'>
      <img src={story.image} className='img-fluid card-img-top' alt='students' loading='lazy' />
      <div className='card-body'>
        <h5 className='card-title text-center fw-bold my-2'>{story.title}</h5>
        <p className='text-center team-font-size mt-3'>{story.description}</p>
        <div className='d-flex justify-content-center'>
          <LearnMore />
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
