import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <section id="Banner">
        <div className='container'>
        <div className='banner'>
        <div className='row'>
         
         <div className='col-md-7'>
           
           <h5 className='display-5 mt-4'>Generate Job Description with Power of AI .......</h5><br></br>
           <h6 className='display-5 mt-4'>HR Meet the New AI Tools</h6>
           <a href='#features'><button className='banner-btn mt-4'> Try Now ✨</button></a>
         </div>
         <div className='col-md-5'>
           <img src='https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-smart-chatbot-cartoon-clipart-png-image_6620453.png' id="banner-img" className='img-fluid' />
         </div>
       </div>
        </div>
         
        </div>
      </section>

      <section id="features">
        <div className='feature mt-4'>
          <div className='row'>
            <h4 className='display-5'>
              Features
            </h4>
            <div className='col-md-7 mt-4'>
              <h5 className='display-5'>Job Description Generator</h5>
              <p className='mt-4'>Create Custom Job Descriptions: Instantly generate well-structured and tailored job descriptions for any role within your organization.</p>
              <Link to='/jobdescription'><button className='btn'>Create Job Description</button></Link>
            </div>
            <div className='col-md-5'>
              <img src='https://storage.googleapis.com/joblist-content/hero-images/image1_2022-12-14-133032_lpon.png' className='img-fluid'></img>
            </div>


            <div className='col-md-5'>
              <img src='https://www.shakebugs.com/wp-content/uploads/2022/02/shake-featured-image-software-developer-job-description.png' className='img-fluid'></img>
            </div>
            <div className='col-md-7 mt-4'>
              <h5 className='display-5'>Job Intro Sizzler Generator</h5>
              <p className='mt-4'>Create Custom Job Descriptions: Instantly generate well-structured and tailored job descriptions for any role within your organization.</p>
              <Link to='/jobsizzler'><button className='btn'>Generate Job Intro</button></Link>
            </div>



            <div className='col-md-7 mt-4'>
              <h5 className='display-5'>Job Hiring Post Generator</h5>
              <p className='mt-4'>Optimize for Social Media: Instantly generate optimized hiring posts suitable for sharing on popular social media platforms.</p>
              <Link to='/linkedpost'><button className='btn'>Create Hiring Post</button></Link>
            </div>
            <div className='col-md-5'>
              <img src='https://cdn3d.iconscout.com/3d/premium/thumb/post-comment-8563233-6752831.png' className='img-fluid'></img>
            </div>

          </div>
        </div>
      </section>

      <section id='services'>
        <div className='container'>
          <div className='row'>
            <h5 className='display-5'>
              Services
            </h5>
            <div className='col-md-4'>
              <div className="card" style={{ width: "20rem", borderRadius: '15px' }}>
                <div className="card-body">
                  <h5 className="card-title">Job Description Generator</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Generate Job Description{" "}
                  </h6>
                  <Link to='/jobdescription' href="" className="card-link">
                    Create <i class="fa-solid fa-arrow-right fa-beat-fade" style={{ color: '#4e03fc', borderRadius: '15px' }}></i>
                  </Link>
                </div>
              </div>

            </div>
            <div className='col-md-4'>
              <div className="card" style={{ width: "20rem", borderRadius: '20px' }}>
                <div className="card-body">
                  <h5 className="card-title">Job Intro Sizzler Generator</h5>
                  <h6 className="card-subtitle mb-2 ">
                    Generate Job Intro Sizzler{" "}
                  </h6>
                  <Link to='/jobsizzler' className="card-link">
                    Create <i class="fa-solid fa-arrow-right fa-beat-fade" style={{ color: '#4e03fc' }}></i>
                  </Link>
                </div>
              </div>

            </div>
            <div className='col-md-4'>
              <div className="card" style={{ width: "20rem", borderRadius: '20px' }}>
                <div className="card-body">
                  <h5 className="card-title">Job Hiring Post Generator</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Generate Hiring Post{" "}
                  </h6>
                  <Link to='/linkedpost' href="#" className="card-link">
                    Create <i class="fa-solid fa-arrow-right fa-beat-fade" style={{ color: '#4e03fc' }}></i>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
     

      <>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-light text-muted">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href="https://twitter.com/Manas30753649" className="me-4 text-reset">
          <i className="fab fa-twitter" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-google" />
        </a>
      
        <a href="https://www.linkedin.com/in/manas-78b6b6212/" className="me-4 text-reset">
          <i className="fab fa-linkedin" />
        </a>
        <a href="https://github.com/Manas15-coder" className="me-4 text-reset">
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
              <b>Attract <span className='logo'>HR</span></b>
            </h6>
            <p>
              Attract HR is a free AI tool integrated with GPT 3.5 useful for HR by helping in generating Job Description, Introduction and Hiring Posts for various Social Media
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Services</h6>
            <p>
              <Link to='/jobdescription'><a href="#!" className="text-reset">
                Job Description Generator
              </a></Link>
            </p>
            <p>
              <Link to='/jobsizzler'><a href="#!" className="text-reset">
                Job Introduction Generator
              </a></Link>
            </p>
            <p>
              <Link to='/linkedpost'><a href="#!" className="text-reset">
                Job Hiring Post Generator
              </a></Link>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" /> India, Noida, Uttar Pradesh
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              manas15072002@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3" /> + 01 234 567 89
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      © 2023 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        Attract HR
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>

    </div>
  )
}

export default Home
