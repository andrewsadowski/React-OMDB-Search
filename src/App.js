import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchInput from './components/SearchInput';

class App extends Component {
  state = {
    term: ''
  };
  handleSearch(data) {
    this.setState({ term: data });
  }

  render() {
    return (
      <div className="App">
        <SearchInput
          handlerFromParent={this.handleSearch.bind(this)}
        />
        <MovieRequest movie={this.state.term} />
        <h1>State from parent:{this.state.term}</h1>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';

// import logo from './logo.svg';
// import axios from 'axios';
// import MovieDetail from './components/MovieDetail';
// import SearchInput from './components/SearchInput';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       searchTerm: '',
//       movieTitle: '',
//       moviePoster: '',
//       movieDescription: ''
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ searchTerm: e.target.value });
//   }

//   componentDidMount() {
//     axios
//       .get(`https://www.omdbapi.com/?apikey=16cd9897&t=caddyshack`)
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

//   handleSubmit(e) {
//     e.preventDefault();
//     axios
//       .get(
//         `https://www.omdbapi.com/?apikey=16cd9897&t=${
//           this.state.searchTerm
//         }`
//       )
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

//   requestMovie(e) {
//     e.preventDefault();
//     this.handleSubmit();
//   }

//   render() {
//     return (
//       <div>
//         <InputSearch onSubmit={this.props.handleChange} />
//         <form onSubmit={this.handleSubmit}>
//           <h1>Search for a movie</h1>
//           <input
//             type="text"
//             value={this.state.searchTerm}
//             onChange={this.handleChange}
//           />
//           <input type="submit" />
//         </form>
//         <MovieDetail props={this.state} />
//         <div style={styles.containerStyles}>
//           <p style={styles.titleStyles}>{this.state.movieTitle}</p>
//           <p style={styles.desStyles}>
//             {this.state.movieDescription}
//           </p>
//           <img
//             src={this.state.moviePoster}
//             style={styles.imgStyles}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// const styles = {
//   searchHeader: {
//     textAlign: 'center'
//   },
//   inputStyle: {},
//   titleStyles: {
//     fontSize: 20,
//     flex: 1
//   },
//   desStyles: {
//     alignSelf: 'center'
//   },
//   imgStyles: {
//     alignSelf: 'flex-end'
//   },
//   containerStyles: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center'
//   },
//   imgContainerStyle: {}
// };

// export default App;

// // <form onSubmit={this.handleSubmit}>
// // <h1 style={styles.searchHeader}>Search for a movie</h1>
// // <input
// //   style={styles.inputStyle}
// //   type="text"
// //   value={this.state.searchTerm}
// //   onChange={this.handleChange}
// // />
// // <input type="submit" />
// // </form>
