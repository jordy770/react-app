import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Navbar from './components/CustomNavbar';
import Footer from './components/CustomFooter';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Project" component={Project} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
