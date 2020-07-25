import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
       <p>Edit</p>
      </div>
    );
  }
}

export default connect()(Edit);