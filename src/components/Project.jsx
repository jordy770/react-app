import React, { Component } from 'react'
import { Grid, Row, Col, Image, Thumbnail, Button } from 'react-bootstrap';
import './Project.css';

export default class Project extends Component {
  render() {
    return (
      <div>
        <img src="assets/mountain-man.jpg" className="header-image"/>
        <h1> My projects</h1>
        <Grid>
            <h2>Projects</h2>
            <Row>
                <Col xs={6} sm={4} className="main-section">
                <Thumbnail src="assets/screenshot.png" alt="242x200">
                  <h3>Order page</h3>
                  <p>It's a catering companie who needed a website</p>
                  <p>
                    <Button href="https://stud.hosted.hr.nl/0948653/projecten/webtante/">Here the link</Button>
                  </p>
                </Thumbnail>
                </Col>
                <Col xs={12} sm={4} className="sidebar-section">   
                <Thumbnail src="assets/wijkpark.png" alt="242x200">
                  <h3>PixelPlace</h3>
                  <p>A project for school</p>
                  <p>
                  <Button href="https://wijkpark.timborowy.nl/pixel">Here the link</Button>
                  </p>
                </Thumbnail>              
                </Col>
                <Col xs={12} sm={4} className="sidebar-section">   
                <Thumbnail src="assets/angrybirds.png" alt="242x200">
                  <h3> AngryBirds game</h3>
                  <p>A small beginning of the Game angrybirds</p>
                  <p>
                  <Button href="https://stud.hosted.hr.nl/0948653/projecten/angry-birds/">Here the link</Button>
                  </p>
                </Thumbnail>              
                </Col>
            </Row>
        </Grid>
      </div>
    )
  }
}
