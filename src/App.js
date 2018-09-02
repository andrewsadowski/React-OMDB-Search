import React, { Component } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import MovieCard from './components/MovieCard';
import ErrorCard from './components/ErrorCard';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
      movieTitle: 'Caddyshack',
      movieDirector: 'Harold Ramis',
      movieYear: '1981',
      movieDescription:
        'An exclusive golf course has to deal with a brash new member and a destructive dancing gopher.',
      moviePoster:
        'https://ia.media-imdb.com/images/M/MV5BY2I1NWE2NzctNzNkYS00Nzg5LWEwZTQtN2I3Nzk3MTQwMDY2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
    };
  }

  getMovie = () => {
    console.log('getmovie');
    axios
      .get(
        `https://www.omdbapi.com/?apikey=16cd9897&t=${
          this.state.term
        }`
      )
      .then(res => {
        console.log(res);
        this.setState({
          movieTitle: res.data.Title,
          movieDirector: res.data.Director,
          movieYear: res.data.Year,
          moviePoster: res.data.Poster,
          movieDescription: res.data.Plot
        });
      })
      .catch(err => console.log(err));
  };

  handleSearch = term => {
    this.setState({ term }, () => {
      this.getMovie();
    });
  };

  render() {
    return (
      <div className="App">
        <SearchInput
          className="input-container"
          handleSearch={this.handleSearch}
        />
        {!this.state.moviePoster ||
        this.state.moviePoster === 'N/A' ? (
          <ErrorCard />
        ) : (
          <MovieCard
            movieTitle={this.state.movieTitle}
            movieYear={this.state.movieYear}
            movieDirector={this.state.movieDirector}
            movieDescription={this.state.movieDescription}
            moviePoster={this.state.moviePoster}
          />
        )}
      </div>
    );
  }
}

export default App;
