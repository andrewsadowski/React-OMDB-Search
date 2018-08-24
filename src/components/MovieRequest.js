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
