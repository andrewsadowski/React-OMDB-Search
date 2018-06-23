import React, { Component } from 'react';
import axios from 'axios';

class MovieRequest extends Component {
  constructor() {
    super();
    this.state = {
      movieTitle: '',
      moviePoster: '',
      movieDescription: ''
    };
  }
  componentDidMount() {
    axios
      .get(`https://www.omdbapi.com/?apikey=16cd9897&t=caddyshack`)
      .then(res => {
        console.log(res);
        this.setState({
          movieTitle: res.data.Title,
          moviePoster: res.data.Poster,
          movieDescription: res.data.Plot
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <p>Movie Title as props: {this.props.movie}</p>
        <p>{this.props.movie}</p>
        <p>{this.state.movieTitle}</p>
        <p>{this.state.movieDescription}</p>
        <img src={this.state.moviePoster} alt="moviePoster" />
      </div>
    );
  }
}

export default MovieRequest;
