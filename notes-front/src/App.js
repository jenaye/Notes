import React, { Component } from 'react';
import Layout from './components/layout';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = (event) => this.setState({open: !this.state.open});

    render() {
      
        const {styleFromProps} = this.props;
        const contentStyle = {  ...styleFromProps, transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

        if (this.state.open) {
            contentStyle.marginLeft = 256;
        }

    return (
      <Router>
          <div>
              <AppBar title="AppTitle" onLeftIconButtonClick={this.handleToggle} style={{ backgroundColor: '#66BB6A'}}
  />
              <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64}} docked={true} width={200} open={this.state.open} zDepth={2}>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                      <MenuItem onClick={this.handleToggle}>Accueil</MenuItem>
                  </Link>
                  <Link to="/new-note" style={{ textDecoration: 'none' }}>
                      <MenuItem onClick={this.handleToggle}>Create note</MenuItem>
                  </Link>
                  <Link to="/new-tag" style={{ textDecoration: 'none' }}>
                      <MenuItem onClick={this.handleToggle}>Create tag</MenuItem>
                  </Link>
                  <Link to="/tags" style={{ textDecoration: 'none' }}>
                      <MenuItem onClick={this.handleToggle} >Tags</MenuItem>
                  </Link>
              </Drawer>
              <Layout data={this.props}/>
          </div>
      </Router>
    );
  }
}

export default App;
