import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
 
  componentDidMount() {
  this.props.dispatch({type: 'GET_MOVIES'})
  }

  render() {
    return (
      <div className="App">
       <p>Home</p>
      </div>
    );
  }
}

export default connect()(Home);