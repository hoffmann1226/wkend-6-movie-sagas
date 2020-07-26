import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

goBack = () => {
    // console.log('handleClick Back To List')
    this.props.history.push('/');
}

goEdit = (id) => {
  this.props.history.push(`/edit/` + id)
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
              <h1>{movie.title}</h1>
              <p>Genres: {movie.genre_list}</p>
              <img src={movie.poster} alt="movie" onClick={()=>this.goEdit(movie.id)}/>
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

export default connect(mapStateToProps)(Details);