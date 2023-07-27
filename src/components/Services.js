import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div>
            <section id='services' className='mt-4'>
                <div className='container mt-4'>
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

        </div>
    )
}

export default Services
