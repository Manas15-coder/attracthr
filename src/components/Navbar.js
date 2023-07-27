import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <div className="container-fluid ">
                    <Link to='/' className="navbar-brand" href="#">
                        <b>Attract <span className='logo'>HR</span></b>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse  justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                        <Link to='/'className="nav-item">
                                <a className="nav-link" href='#services'>
                                    Home
                                </a>
                            </Link>
                            <Link to='/features'className="nav-item">
                                <a className="nav-link" href="#features">
                                    Features
                                </a>
                            </Link>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false" data-bs-target=".navbar-collapse.show"
                                >
                                    Services
                                </a>
                                <ul className="dropdown-menu">
                                    <Link to='/jobdescription'>
                                        <a className="dropdown-item" href="#">
                                            Job Description Generator
                                        </a>
                                    </Link>
                                    <Link to='/jobsizzler'>
                                        <a className="dropdown-item" href="#">
                                            Job Sizzler Introduction Generator
                                        </a>
                                    </Link>
                                    <Link to='/linkedpost'>
                                        <a className="dropdown-item" href="#">
                                            Job Hiring Post Generator
                                        </a>
                                    </Link>
                                
                                </ul>
                            </li>
                            <Link to='/contact' className="nav-item">
                                <a className="nav-link">
                                    Contact Us
                                </a>
                            </Link>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
