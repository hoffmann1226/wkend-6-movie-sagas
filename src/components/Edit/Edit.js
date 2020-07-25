import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

  goBack = () => {
    // console.log('handleClick Back To List')
    this.props.history.push('/details');
}
  render() {
    return (
      <div>
       <p>Edit Movie Details</p>
       <input placeholder="new title"></input>
       <input placeholder="new description"></input>
       <button onClick={this.goBack}>Cancel</button>
       <button onClick={this.saveChanges}>Save</button>
      </div>
    );
  }
}

export default connect()(Edit);