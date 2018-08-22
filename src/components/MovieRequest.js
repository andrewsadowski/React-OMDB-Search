import React from "react";
import './MovieRequest.css'

const MovieRequest = ({
  movieTitle,
  movieDescription,
  moviePoster
}) => {
  return (
    <div className="movie-container">
      <p className="movie-title">{movieTitle}</p>
      <p className="movie-description">
        {movieDescription}
      </p>
      <img
        className="movie-image"
        src={moviePoster}
        alt="moviePoster"
      />
    </div>
  );
};

export default MovieRequest;

// import React, { Component } from 'react';
// import axios from 'axios';

// class MovieRequest extends Component {
//   constructor() {
//     super();
//     this.state = {
//       movieTitle: '',
//       moviePoster: '',
//       movieDescription: ''
//     };
//     this.renderMovie = this.renderMovie.bind(this);
//     this.getMovie = this.getMovie.bind(this);
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

//   getMovie(props) {
//     axios
//       .get(
//         `https://www.omdbapi.com/?apikey=16cd9897&t=${
//           this.props.movie
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

//   renderMovie() {
//     if (this.props.movie === '') {
//       return (
//         <div>
//           <p className="movieTitle">{this.props.movie}</p>
//           <p className="movieTitle">{this.state.movieTitle}</p>
//           <p className="movieDescription">
//             {this.state.movieDescription}
//           </p>
//           <img
//             className="moviePoster"
//             src={this.state.moviePoster}
//             alt="moviePoster"
//           />
//         </div>
//       );
//     } else {
//       this.getMovie();
//       return (
//         <div>
//           <p className="movieTitle">{this.props.movie}</p>
//           <p className="movieTitle">{this.state.movieTitle}</p>
//           <p className="movieDescription">
//             {this.state.movieDescription}
//           </p>
//           <img
//             className="moviePoster"
//             src={this.state.moviePoster}
//             alt="moviePoster"
//           />
//         </div>
//       );
//     }
//   }

//   render() {
//     this.renderMovie();
//     return (
//       <div className="movieInfoContainer">
//         <div>{this.renderMovie()}</div>
//       </div>
//     );
//   }
// }

// const styles = {
//   movieInfoContainer: {
//     display: 'flex'
//   },
//   moviePoster: {
//     display: 'flex'
//   },
//   movieDescription: {},
//   movieTitle: {}
// };

// export default MovieRequest;
