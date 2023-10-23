import React from 'react'
import '../styles/App.css'
function LearnMore() {
  
  const styles=`
  .button-background{
    font-size: 14px;
    background-color: rgb(116, 22, 198);
    color: white;
  }
  
  .button-background:hover{
    color: rgb(116, 22, 198);
    background-color: white;
    border-color: rgb(116, 22, 198);
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