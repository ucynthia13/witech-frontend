import React, { useState } from 'react'
import image3 from '../../assets/image3.jpg'
import teamNames from '../../assets/data/team'
import Svg from '../../assets/icons/Svg'


function Team() {
     
    const [members, setMembers ] = useState(teamNames)
    
  return (
    <div className='container mt-5 text-font'>
        <div className='row align-items-center g-5 d-flex justify-content-center'>
            <p className='mt-5 text-center'>Expert people</p>
            <p className='mt-2 h3 fw-bold text-center horizontal-line'>Meet <span className='heading-color'>Our</span> Team</p>
            <p className='mt-2 text-center team-font-size'>This letter serves to confirm that Aline Niyomungeli <span className='d-block'>was sponsored by Imbuto Foundation during her seco</span></p>
            {members.map((member, index) => (
            <div className='col-lg-3' key={index}>
            <div className='image-flip'>
                <div className='mainflip flip-0'>
                    <div className='frontside hover-effect'>
                        <div className='card border-0'>
                            <img className='card-img-top img-fluid rounded-circle mt-4 team-image ms-4' style={{ width: '230px', height: '300px', backgroundPosition:'cover' }} src={member.image} alt='Team Member'></img>
                            <p className='card-title text-center pt-3 pb-1 fw-bold'>{member.name}</p>
                            <p className='card-text text-center mb-4 team-font-size'>{member.title}</p>
                        </div>
                    </div>
                    <div className='backside hover-effect'>
                        <div className='card border-0 px-2'>
                            <p className='card-title text-center fw-bold pt-5'>{member.name}</p>
                            <p className='card-text text-center text-font-size'>{member.description} </p>
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
    </div>
  )
}

export default Team