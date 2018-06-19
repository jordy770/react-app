import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import './CustomFooter.css';

export default class CustomFooter extends Component {
  render() {
    return (
        <footer className="footer">
          <Grid>
            <Row>
              <Col xs={9} sm={3}>
                <Thumbnail href="https://codepen.io/jordy770/"  src="/assets/Codepen.png" />
              </Col>
              <Col xs={9} sm={3}>
                <Thumbnail href="https://www.linkedin.com/in/jordy-van-santen-b0a20851/" src="/assets/Linked in.png" />
              </Col>
              <Col xs={9} sm={3}>
                <Thumbnail href="https://github.com/jordy770/" src="/assets/Github.png" />
              </Col>
            </Row>
          </Grid>;         
        </footer>
    )
  }
}
