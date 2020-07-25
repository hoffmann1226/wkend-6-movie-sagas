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
       {/* {JSON.stringify (this.props.reduxState.detailsReducer)} */}
       {this.props.reduxState.detailsReducer.map(movie => {
          return (
            <div key={movie.id}>
              <p>{movie.title}</p>
              <img src={movie.poster} alt="movie" onClick={()=>this.handleClick(movie.id)}/>
              <p>{movie.description}</p>
              <p>Genres: {movie.genre_list}</p>
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

export default connect(mapStateToProps)(Details);