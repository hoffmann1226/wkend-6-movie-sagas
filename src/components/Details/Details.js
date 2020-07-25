import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
       <p>Details</p>
      </div>
    );
  }
}

export default connect()(Details);