import React from 'react';

const MovieRequest = ({
  movieTitle,
  movieDescription,
  moviePoster
}) => {
  return (
    <div>
      <p>{movieTitle}</p>
      <p>{movieDescription}</p>
      <img src={moviePoster} alt="moviePoster" />
    </div>
  );
};

export default MovieRequest;

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
// import SearchInput from './components/SearchInput';
// import MovieRequest from './components/MovieRequest';

// import './styles.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       term: '',
//       movieTitle: '',
//       movieDescription: '',
//       moviePoster: ''
//     };
//     this.getMovie = this.getMovie.bind(this);
//     this.handleSearch = this.handleSearch.bind(this);
//   }

//   componentDidMount() {
//     axios
//       .get(`https://www.omdbapi.com/?apikey=16cd9897&t=caddyshack`)
//       .then(res => {
//         console.log(res);
//         this.setState({
//           term: 'caddyshack',
//           movieTitle: res.data.Title,
//           moviePoster: res.data.Poster,
//           movieDescription: res.data.Plot
//         });
//       })
//       .catch(err => console.log(err));
//   }

//   getMovie() {
//     axios
//       .get(`https://www.omdbapi.com/?apikey=16cd9897&t=${this.state.term}`)
//       .then(res => {
//         console.log(res);
//         this.setState({
//           movieTitle: res.data.Title,
//           moviePoster: res.data.Poster,
//           movieDescription: res.data.Plot
//         });
//       })
//       .catch(err => console.log(err));
//   }

//   handleSearch(data) {
//     this.setState({ term: data });
//     this.getMovie();
//   }

//   render() {
//     return (
//       <div className="App">
//         <SearchInput
//           handlerFromParent={this.handleSearch}
//           onSubmit={this.getMovie}
//         />
//         <MovieRequest
//           movieTitle={this.state.movieTitle}
//           movieDescription={this.state.movieDescription}
//           moviePoster={this.state.moviePoster}
//         />
//       </div>
//     );
//   }
// }

// export default App;

// // import React, { Component } from 'react';

// // import logo from './logo.svg';
// // import axios from 'axios';
// // import MovieDetail from './components/MovieDetail';
// // import SearchInput from './components/SearchInput';
// // import './App.css';

// // class App extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       searchTerm: '',
// //       movieTitle: '',
// //       moviePoster: '',
// //       movieDescription: ''
// //     };

// //     this.handleSubmit = this.handleSubmit.bind(this);
// //     this.handleChange = this.handleChange.bind(this);
// //   }

// //   handleChange(e) {
// //     this.setState({ searchTerm: e.target.value });
// //   }

// //   componentDidMount() {
// //     axios
// //       .get(`https://www.omdbapi.com/?apikey=16cd9897&t=caddyshack`)
// //       .then(res => {
// //         console.log(res);
// //         this.setState({
// //           movieTitle: res.data.Title,
// //           moviePoster: res.data.Poster,
// //           movieDescription: res.data.Plot
// //         });
// //       })
// //       .catch(err => console.log(err));
// //   }

// //   handleSubmit(e) {
// //     e.preventDefault();
// //     axios
// //       .get(
// //         `https://www.omdbapi.com/?apikey=16cd9897&t=${
// //           this.state.searchTerm
// //         }`
// //       )
// //       .then(res => {
// //         console.log(res);
// //         this.setState({
// //           movieTitle: res.data.Title,
// //           moviePoster: res.data.Poster,
// //           movieDescription: res.data.Plot
// //         });
// //       })
// //       .catch(err => console.log(err));
// //   }

// //   requestMovie(e) {
// //     e.preventDefault();
// //     this.handleSubmit();
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <InputSearch onSubmit={this.props.handleChange} />
// //         <form onSubmit={this.handleSubmit}>
// //           <h1>Search for a movie</h1>
// //           <input
// //             type="text"
// //             value={this.state.searchTerm}
// //             onChange={this.handleChange}
// //           />
// //           <input type="submit" />
// //         </form>
// //         <MovieDetail props={this.state} />
// //         <div style={styles.containerStyles}>
// //           <p style={styles.titleStyles}>{this.state.movieTitle}</p>
// //           <p style={styles.desStyles}>
// //             {this.state.movieDescription}
// //           </p>
// //           <img
// //             src={this.state.moviePoster}
// //             style={styles.imgStyles}
// //           />
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // const styles = {
// //   searchHeader: {
// //     textAlign: 'center'
// //   },
// //   inputStyle: {},
// //   titleStyles: {
// //     fontSize: 20,
// //     flex: 1
// //   },
// //   desStyles: {
// //     alignSelf: 'center'
// //   },
// //   imgStyles: {
// //     alignSelf: 'flex-end'
// //   },
// //   containerStyles: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     justifyContent: 'center'
// //   },
// //   imgContainerStyle: {}
// // };

// // export default App;

// // // <form onSubmit={this.handleSubmit}>
// // // <h1 style={styles.searchHeader}>Search for a movie</h1>
// // // <input
// // //   style={styles.inputStyle}
// // //   type="text"
// // //   value={this.state.searchTerm}
// // //   onChange={this.handleChange}
// // // />
// // // <input type="submit" />
// // // </form>
