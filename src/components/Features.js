import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

const Features = () => {
    return (
        <div>
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

        

        </div>
    )
}

export default Features
