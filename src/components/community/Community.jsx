import React, { useState } from 'react';


function Community() {

  return (
    <div className='container'>
      <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
        <p className='h6 text-center'>COMMUNITY</p>
        <div className='col-lg-6 slack'>

        </div>

        <div className='col-lg-6'>
          <p className='text-start fw-bold h2 mt-2'>Growing <span className='heading-color'>Slack </span><span className='d-block'>Community</span></p>
          <p className='mt-4'>
            Start an amazing journey; Join our thriving Slack community, where we connect, share knowledge, and make progress together. You're invited to be part of our growing community and help us shape it.
          </p>
          <a className='btn btn-outline-secondary px-4 py-2 mt-4 button-background' href='#'>Learn More</a>
        </div>
      </div>
      <hr className='mt-4'></hr>
    </div>
  );
}

export default Community;
