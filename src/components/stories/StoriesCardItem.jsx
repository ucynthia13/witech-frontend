import React from 'react';
import image1 from '../../assets/image1.jpg'

const StoriesCardItem = ({ item }) => {
  return (
    <div className="mentor-card">
      <div className="card">
        <div className="image-container">
          <img src={image1} width={570} height={427} ></img>
        </div>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p className="card-text category">{item.category}</p>
          <p className="card-text description">{item.description}</p>
          <div className="company-logo">
            <img src={image1} alt={item.company?.name + ' logo'} ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesCardItem;
