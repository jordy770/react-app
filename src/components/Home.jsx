import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button, Carousel, CarouselItem, CarouselCaption} from 'react-bootstrap';
import  './Home.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Grid>                 
           <Row className="show-grid text-center">
              <Col xs={12} sm={6} className="person-jumbo">
              <ScrollAnimation animateIn='fadeIn' delay={1000}>
              <Jumbotron className="introtext-homepage">
                <h1>Welcome</h1>
                <p> This is my portfolio website </p>
                <p> I'm Jordy van Santen and i'm 20 years old <br /> I'm a beginning Creative programmer </p>
                <p> At this moment i'm studying at the university of applied science Rotterdam and the course I'm following is Creative Media and Game Technologies.</p>
                <p> Click Here if you want to know me Better!!</p>
                <ScrollAnimation delay={2000}animateIn="fadeIn">
                <Button className="home-button" bsSize="large" href="./About"> About ME! </Button>
                <Button className="home-button" bsSize="large" href="./News"> My Projects! </Button>
              </ScrollAnimation>
                </Jumbotron>
              </ScrollAnimation>
              </Col>
              <Col xs={12} sm={6} className="person-wrapper">
                <Image src="assets/beter.png" circle className="profile-pic"/>
              </Col>
            </Row>
            </Grid>
            <div className="Aboutme-homepage">
            <Row>
            <Col xs={12} sm={12} >
              <h2> Some sneakpeaks </h2> <br/>
            </Col>
            </Row>
            <Grid>
            <Row>
              <Col xs={12} sm={1} xsOffset={1}>
              <Carousel className="carousel-homepage">
              <Carousel.Item>
                <img width={900} height={600} alt="" src="assets/screenshot.png" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="assets/pictureMaquette.png" />
                <Carousel.Caption>
                  <p> This is a project I did for school, I had to make a maquette and this was the finalresult !</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <br/>
            </Col>
            </Row>
            </Grid>
            </div>
        
       
        </div>
    )
  }
}
