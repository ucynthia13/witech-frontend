import React from 'react'
import '../styles/App.css'
function LearnMore() {
  
  const styles=`
  .button-background{
    background-color: rgb(119,0,207);
    color: white;
  }
  
  .button-background:hover{
    color: rgb(119,0,207);
    background-color: white;
    border-color: rgb(119,0,207);
  }
  `
  return (
    
    <a className='btn btn-outline-secondary mb-3 px-4 rounded button-background' href='#'>
      <style>{styles}</style>
    Learn More
  </a>
  )
}

export default LearnMore