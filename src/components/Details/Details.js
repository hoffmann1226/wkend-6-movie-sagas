import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

goBack = () => {
    // console.log('handleClick Back To List')
    this.props.history.push('/');
}

goEdit = (id) => {
  this.props.history.push('/edit/' + id)
}

render() {
  return (
      <div >
          {this.props.reduxState.detailsReducer.map(movie =>
              <div key={movie.id}>
                  <h2>{movie.title}</h2>
                  <p>Genres: {movie.genre_list}</p>
                  <img src={movie.poster} alt={movie.description} />
                  <p>{movie.description}</p>
                  <button onClick={this.goBack}>Back</button>
                  <button onClick={() => this.goEdit(movie.id)} >Edit</button>
              </div>
          )}
      </div>
  )
}
}

const mapStateToProps = reduxState => {
  return {
      reduxState
  };
};

export default connect(mapStateToProps)(Details);