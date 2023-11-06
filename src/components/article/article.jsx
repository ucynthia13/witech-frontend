import React from "react";
import Navbar from "../nav/Navbar";
import image1 from "../../assets/image1.jpg";
import profile1 from "../../assets/profile.png";
import Contact from "../contact/Contact";
function Article() {
  const styles = `
  .button-background{
    font-size: 15px;
    background-color: rgb(119,0,207);
    color: white;
    height:5%;
    
  }
  `;
  return (
    <div className="px-xl-5">
      <Navbar />
      <div className="mt-5">
      <div>
        <h1>Latest Articles</h1>
      </div>
      <div className="d-flex mt-5">
      <div className="d-inline-block">
        <div className="btn btn-outline-secondary mb-2 px-3 button-background position-absolute">
          <style>{styles}</style>
          <p>12.MARCH 2023</p>
        </div>
        <div className="">
        <img src={image1} alt="image" className="img-fluid " />
        </div>
        <div className="d-flex mt-4">
        <p>Training</p>
        <p> --- By Ndizihiwe Regis</p>
      </div>
      </div>
      
      <div className="px-5 col-lg-7">
        <h3>Kids at Kazuba primary School had Fun learning computer Basics</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <h6>
          “ Never be jealous of what God does for somebody else, what God has
          for you is for you and he is never gonna deliver your mail to somebody
          else’s house. “
        </h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, sea takimata sanctus magna Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod id tempor invidunt ut labore
          et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Quaestio clita kasd
          gubergren, no sea takimata sanctus est Lorem amet. Loem ipsum dolor
          sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam mea dolores et ea rebum. Stet clita kasd
          gubergren sea takimata.
        </p>
      </div>
      </div>
      <div className="d-flex border-bottom pb-4 mt-5">
        <div className="">
          <img src={profile1} alt="profile" />
        </div>
        <div className="col-lg-4 px-5">
          <h4>Jouis Nyerere</h4>
          <p>
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Quaestio clita kasd gubergren, no sea takimata sanctus est Lorem
            amet. Loem ipsum dolo
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h4>Comments</h4>
        <div className="d-flex border-bottom pb-4 mt-4">
          <div className="rounded-circle">
            <img src={profile1} alt="profile" className="rounded-circle" />
          </div>
          <div className="col-lg-4 px-5">
            <h4>Jouis Nyerere</h4>
            <p>
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Quaestio clita kasd gubergren, no sea takimata sanctus est Lorem
              amet. Loem ipsum dolo
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 col-lg-6">
        <h4>Post a Comment</h4>
        
        <div class="mb-3">
          {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3">
          {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <p>Save my name, email, and website in this browser for the next time I comment.</p>
        <div className="text-center">
        <button type="button" className="btn btn-secondary col-md-3 mt-4">Submit</button>
        </div>
      </div>
      </div>
      <div>
        <h1>Latest Articles</h1>
      </div>
      <div className="d-flex">
      <div>
        <div className="btn btn-outline-secondary mb-2 px-3 button-background position-absolute">
          <style>{styles}</style>
          <p>12.MARCH 2023</p>
        </div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            width="600"
            height="489"
            src="https://www.youtube.com/embed/vAOWRithkqs"
            title="Bayi Bayi Ingona"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            // className="col-lg-12"
          ></iframe>
        </div>
        <div className="d-flex">
        <p>Training</p>
        <p> --- By Ndizihiwe Regis</p>
      </div>
      </div>
   
      <div className="px-5 col-lg-7">
        <h3>Kids at Kazuba primary School had Fun learning computer Basics</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <h6>
          “ Never be jealous of what God does for somebody else, what God has
          for you is for you and he is never gonna deliver your mail to somebody
          else’s house. “
        </h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, sea takimata sanctus magna Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod id tempor invidunt ut labore
          et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Quaestio clita kasd
          gubergren, no sea takimata sanctus est Lorem amet. Loem ipsum dolor
          sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam mea dolores et ea rebum. Stet clita kasd
          gubergren sea takimata.
        </p>
      </div>
      </div>
      <div className="d-flex border-bottom pb-4 mt-5">
        <div className="">
          <img src={profile1} alt="profile" />
        </div>
        <div className="col-lg-4 px-5">
          <h4>Jouis Nyerere</h4>
          <p>
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Quaestio clita kasd gubergren, no sea takimata sanctus est Lorem
            amet. Loem ipsum dolo
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h4>Comments</h4>
        <div className="d-flex border-bottom pb-4 mt-4">
          <div className="rounded-circle">
            <img src={profile1} alt="profile" className="rounded-circle" />
          </div>
          <div className="col-lg-4 px-5">
            <h4>Jouis Nyerere</h4>
            <p>
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Quaestio clita kasd gubergren, no sea takimata sanctus est Lorem
              amet. Loem ipsum dolo
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 col-lg-6">
        <h4>Post a Comment</h4>
        
        <div class="mb-3">
          {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3">
          {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <p>Save my name, email, and website in this browser for the next time I comment.</p>
        <div className="text-center">
        <button type="button" className="btn btn-secondary col-md-3 mt-4">Submit</button>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Article;
