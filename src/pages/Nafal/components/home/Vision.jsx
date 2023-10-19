import React from 'react';
import video from '../../../../assets/videos/nafal_vision.mp4';

const Vision = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="title">
        <h3 className="title mb-4">
          <span className="text-primary">Vision</span>
        </h3>
      </div>
      <div className="shadow-lg p-3 mb-5  bg-body rounded">
        <video width="750" height="500" controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Vision;
