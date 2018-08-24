import React from 'react';
import './MovieCard.css';

const MovieCard = ({
  movieTitle,
  movieDescription,
  movieDirector,
  movieYear,
  moviePoster
}) => {
  return (
    <div className="movie-container">
      <p className="movie-title">{movieTitle}</p>
      <p className="movie-description">Plot: {movieDescription}</p>
      <p className="movie-year">Released: {movieYear}</p>
      <p className="movie-director">Director: {movieDirector}</p>
      <img
        className="movie-image"
        src={moviePoster}
        alt="moviePoster"
      />
    </div>
  );
};

export default MovieCard;
