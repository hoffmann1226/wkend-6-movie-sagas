import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
       <p>Home</p>
      </div>
    );
  }
}

export default connect()(Home);