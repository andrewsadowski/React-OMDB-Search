import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      movieTitle: '',
      moviePoster: '',
      movieDescription: ''
    };
    this.requestMovie = this.requestMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
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

  handleSubmit(e) {
    e.preventDefault();
    axios
      .get(
        `https://www.omdbapi.com/?apikey=16cd9897&t=${
          this.state.searchTerm
        }`
      )
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

  requestMovie(e) {
    e.preventDefault();
    this.handleSubmit();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Search for a movie</h1>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
        <div style={styles.containerStyles}>
          <p style={styles.pStyles}>{this.state.movieTitle}</p>
          <img
            src={this.state.moviePoster}
            style={styles.imgStyles}
          />
          <p style={styles.pStyles}>{this.state.movieDescription}</p>
        </div>
      </div>
    );
  }
}

const styles = {
  pStyles: {
    fontSize: 20,
    flexWrap: 'wrap',
    flex: 1
  },
  imgStyles: {
    flex: 1
  },
  desStyles: {},
  textContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#007aff',
    borderBottomWidth: 0
  },
  imgContainerStyle: {
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: 'black'
  }
};

export default App;
