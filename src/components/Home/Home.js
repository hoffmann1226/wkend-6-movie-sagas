import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
 
  //initialize get movies saga when page loads
  componentDidMount() {
  this.props.dispatch({type: 'GET_MOVIES'})
  }

  render() {
    return (
      <div>
      {/* {JSON.stringify (this.props.reduxState.moviesReducer)} */}
      {this.props.reduxState.moviesReducer.map(movie => {
          return (
            <div key={movie.id}>
              <p>{movie.title}</p>
              <img src={movie.poster} alt="movie image" onClick={()=>this.handleClick(movie.id)}/>
              <p>{movie.description}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
      reduxState
  };
};

export default connect(mapStateToProps)(Home);