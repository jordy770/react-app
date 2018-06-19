import React, { Component } from 'react'
import { Grid, Row , Col, Image} from 'react-bootstrap';
import './About.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
  render() {
    return (
      <div>
        
    
        <Grid>
            <Col xs={12} sm={12} className="about-page-col">
                <Image src="assets/beter.png" className="about-profile-pic" rounded />
                <h3> About me!</h3>
                <p> Hello !!<br/>I'm Jordy van Santen and I'm 20 years old. I live in Bleiswijk where I olso grew up. I still live with my parents, my sister and our dog. At this moment I'm following the education called Creative Media and Game Technologies (CMGT) in Rotterdam.</p>
            </Col>
            <Col xs={12} sm={12}className="about-page-col2">
              <p>Before I started with the course Creative Media and Game Technologies, I studied Mechatronics (AKA. Middenkader Enginering) but I didn't like it very much but still finished my education. That course I followed didn't have anything in common so I learned most of it by myself.</p>
              <p>I really like to challenge myself by starting more complicated projects, so my plans for this summer, I want to setup my own VPS. I still don't know what to do with it but eventually I'll find out a way to use it :P</p> <br/>        
            </Col>
            {/* <Row>
            <Col xs={12} sm={5} smPush={1} className="about-page-col-skill">
              <h3> My programming skills </h3>
              <p> HTML & CSS </p>  
              <p> PHP </p>
              <ScrollAnimation animateIn='fadeIn' delay={500}>
              <p> JavaScript </p>     
              </ScrollAnimation>
            </Col>
            <Col xs={12} sm={5} className="about-page-col-skill">
              <h3> My programming skills </h3>
              <p> HTML & CSS </p>  
              <p> PHP </p>
              <ScrollAnimation animateIn='fadeIn' delay={500}>
              <p> JavaScript </p>     
              </ScrollAnimation>
            </Col>
            </Row> */}
            <Col xs={12} sm={9} className="about-page-col-hobby">
              <h3> My Hobby's </h3>
              <p> I like to play online games with my friends Or go out at night to party with them. </p>
              <p> Trying to Program something to make it easier for myself. </p>
              <p> Long Longboard sessions with good weather. </p>
              <p> I olso really enjoy Swimming and Wintersports and much more but it needs to be fun! </p> 
             
            </Col>
        </Grid>
      </div>
    )
  }
}
