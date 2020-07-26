import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

  //use local state to gather info for update
  state = {
    movie: {
        title: '',
        description: '',
        id: this.props.match.params.id
    },
}


   // set local state when inputs are entered
   handleChange = (event, input) => {
    this.setState({
        movie: {
            ...this.state.movie,
            [input]: event.target.value
        }
    })
}

//navigate back to details page
  goBack = () => {
    this.props.history.push('/details');
}

handleSave = () => {
  if (this.state.movie.title === '' || this.state.movie.description === '') {
      alert('Enter title and description to save')
  } else {
      this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.movie })
      this.goBack();
  }
}
  render() {
    return (
      <div>
       <p>Edit Movie Details</p>
       <div>
       <input onChange={(event) => this.handleChange(event, 'title')} placeholder="new title"></input>
       </div>
       <div>
       <textarea onChange={(event) => this.handleChange(event, 'description')} placeholder="new description"></textarea>
       </div>
       <button onClick={this.goBack}>Cancel</button>
       <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default connect()(Edit);