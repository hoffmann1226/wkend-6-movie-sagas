import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

  goBack = () => {
    // console.log('handleClick Back To List')
    this.props.history.push('/');
}

goEdit = () => {
  // console.log('handleClick Back To List')
  this.props.history.push('/edit');
}

  render() {
    return (
      <div>
       <button onClick={this.goBack}>Back to List</button>
       <button onClick={this.goEdit}>Edit</button>
      </div>
    );
  }
}

export default connect()(Details);