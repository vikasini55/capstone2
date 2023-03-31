import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import './Styles/Home.css'
import img1 from "./Images/car2.jpg"
import img2 from "./Images/car6.webp"
import img3 from "./Images/car4.jpg"
const Home = () => {
    return (
        <div className="App">
            <div className="carousel">
            <Carousel>
                <Carousel.Item><img src= {img1}  alt="First slide"/>
                    <Carousel.Caption className="slide-text">
                        <h1>FIND YOUR DREAM JOB</h1>
                        <p>You are not limited to your city for boring jobs. You can use Top Jobs portal for suitable
                            jobs in easy way across the country.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item><img src= {img2} alt="Second slide"/>
                    <Carousel.Caption className="slide-text">
                    <h1>CREATE YOUR JOB</h1>
                        <p>Your dream job doesn't exists you must have to create it.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item><img src= {img3} alt="Thrid slide"/>
                    <Carousel.Caption className="slide-text">
                    <h1>ABOUT DREAM JOB</h1>
                        <p>It won't be easy but worth it.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>

            <div className="bottom-links">
                <Navbar className="Nav-items">
                    <Nav.Link href="jobs" className="bottomlink">Jobs</Nav.Link>
                    <Nav.Link href="contact" className="bottomlink">Contact us</Nav.Link>
                    <Nav.Link href="#" className="bottomlink">Coming Soon</Nav.Link>
                </Navbar> 
            </div>
        </div>          
    )
}

export default Home;