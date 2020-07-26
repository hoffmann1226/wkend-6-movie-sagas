import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit'
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' exact component={Home}/>
          <Route exact path='/details/' component={Details} />
          <Route exact path='/edit/:id' component={Edit} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
