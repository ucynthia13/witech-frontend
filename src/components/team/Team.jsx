import React, { useState } from 'react'
import image3 from '../../assets/image3.jpg'
import teamNames from '../../assets/data/team'
import Svg from '../../assets/icons/Svg'


function Team() {
     
    const [members, setMembers ] = useState(teamNames)
    
  return (
    <div className='container mt-5'>
        <div className='row align-items-center g-5 d-flex justify-content-center'>
            <p className='mt-5 text-center'>Expert people</p>
            <p className='mt-2 h3 fw-bold text-center'>Meet <span className='heading-color'>Our</span> Team</p>
            <p className='mt-2 text-center'>This letter serves to confirm that Aline Niyomungeli <span className='d-block'>was sponsored by Imbuto Foundation during her seco <span className='d-block'>Byimana from senior 2 to senior 3 through</span></span></p>
            {members.map((member, index) => (
            <div className='col-lg-3' key={index}>
            <div className='image-flip'>
                <div className='mainflip flip-0'>
                    <div className='frontside hover-effect'>
                        <div className='card'>
                            <img className='card-img-top img-fluid rounded-circle mt-4 team-image ms-4' style={{ width: '230px', height: '170px' }} src={image3} alt='Team Member'></img>
                            <p className='card-title text-center pt-3 pb-1 fw-bold'>{member.name}</p>
                            <p className='card-text text-center mb-4'>{member.title}</p>
                        </div>
                    </div>
                    <div className='backside mt-3 hover-effect'>
                        <div className='card px-2'>
                            <p className='card-title text-center fw-bold pt-5'>{member.name}</p>
                            <p className='card-text text-center'>{member.description} </p>
                            <div className='text-center heading-color pb-5'>
                                <Svg />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            ))}
        </div>
        <hr className='mt-5'></hr>
    </div>
  )
}

export default Team