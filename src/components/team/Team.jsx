import React from 'react';
import curve from '../../assets/shape.png';
import AlineImage from '../../assets/team/NIYOMUNGELIAline.jpeg';
import RuthImage from '../../assets/team/NKUBITOYIMANZIRuth.jpeg';
import DivineImage from '../../assets/team/INGABIREDivine.jpeg';
import IgorImage from '../../assets/team/BISIZIMUHIREIghor.jpeg';
import CynthiaImage from '../../assets/team/UMWALICynthia.jpeg';
import RegisImage from '../../assets/team/NDIZIHIWERegis.jpeg';
import IrisImage from '../../assets/team/NGABOIris.jpeg';
import MelissaImage from '../../assets/team/KABALISA MUGISHA Melissa.JPG'

const teamMembers = [
  { name: 'Aline Niyomungeli', role: 'CEO', image: AlineImage, description: 'Passionate leader with a focus on delivering exceptional results.' },
  { name: 'Nkubitoyimanzi Ruth', role: 'CTO', image: RuthImage, description: 'Innovative Chief Technology Officer dedicated to driving technological advancements and ensuring excellence in our services.' },
  { name: 'Ingabire Divine', role: 'CTO', image: DivineImage, description: 'Creative developer contributing to the success of our projects.' },
  { name: 'Cynthia Umwali', role: 'COO', image: CynthiaImage, description: 'Strategic Chief Operating Officer committed to operational excellence and providing top-notch customer services.' },
  { name: 'Bisizi Ighor', role: 'CTO', image: IgorImage, description: 'Results-driven Chief Technology Officer focused on leveraging technology for our continued success.' },
  { name: 'Ndizihiwe Regis', role: 'CTO', image: RegisImage, description: 'Experienced Chief Technology Officer ensuring the technological backbone of our organization remains robust.' },
  { name: 'Ngabo Iris', role: 'CTO', image: IrisImage, description: 'Innovative Chief Technology Officer dedicated to driving technological advancements and ensuring excellence.' },
  { name: 'Kabalisa Mugisha Melissa', role: 'CTO', image: MelissaImage, description: 'Innovative Chief Technology Officer dedicated to driving technological advancements and ensuring excellence.' },
];

function Team() {
  return (
    <div className="py-5 text-font">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <p className='h2 text-center mb-4 fw-bolder'>
              Meet <span className='heading-color'><span className='underlined'> Our Team</span>

              </span>
            </p>
            <p className='text-center text-font-size mb-5 team-font-size'>This letter confirms that Aline Niyomungeli <span className='d-block'>was sponsored by Imbuto Foundation during her seco</span></p>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 mb-4" key={index}>
              <div className="row">
                <div className="col-md-12 text-center">
                  <img src={member.image} alt={member.name} className="img-fluid rounded-circle" style={{ width: '200px', height: '205px' } } loading='lazy'/>
                </div>
                <div className="col-md-12 text-center">
                  <div className="pt-2">
                    <h6 className="mt-4 mb-0 fw-bold">{member.name}</h6>
                    <p className="mb-3 heading-color">{member.role}</p>
                    <p className='team-font-size'>{member.description}</p>
                    <ul className="list-inline">
                      <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                      <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                      <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                      <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
