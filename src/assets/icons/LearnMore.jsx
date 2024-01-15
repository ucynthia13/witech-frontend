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

  const redirectToBlog = () => {
      const newWindow = window.open('https://photos.app.goo.gl/TEiTNqB6zaBe94f4A', '_blank')
      if(newWindow){
        newWindow.opener = null
      }
  }
  return (
   
    <button className='btn btn-outline-secondary mb-3 px-4 rounded button-background team-font-size' onClick={redirectToBlog}>
      <style>{styles}</style>
    Learn More
    </button>
  )
}

export default LearnMore 