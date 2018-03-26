import React, { Component } from 'react';
import Layout from './components/layout';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom';

class App extends Component {

    render() {
    return (
      <div className="App">
      <Router>
          <div>
              <nav className="navbar navbar-default navbar-inverse">
                  <div className="container-fluid" id="navfluid">
                      <div className="navbar-header">
                          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>
                          <Link to="/" className="navbar-brand">{this.props.name} / {this.props.defaultLang}</Link>
                      </div>
                      <div className="collapse navbar-collapse" id="navigationbar">
                          <ul className="nav navbar-nav">
                              <li><Link to="/new-note">Create note</Link></li>
                              <li><Link to="/tags">Tags</Link></li>
                          </ul>
                      </div>
                  </div>
              </nav>
              <Layout data={this.props}/>
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
