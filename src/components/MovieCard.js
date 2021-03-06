import React from "react";
import "./MovieCard.css";

const MovieCard = ({
  movieTitle,
  movieDescription,
  movieDirector,
  imdbID,
  movieYear,
  moviePoster
}) => {
  return (
    <div
      className="movie-container"
      onClick={() =>
        window.open(`https://www.imdb.com/title/${imdbID}`)
      }
    >
      <p className="movie-title">{movieTitle}</p>
      <p className="movie-description">
        Plot:
        <br /> {movieDescription}
      </p>
      <p className="movie-year">
        Released: <br /> {movieYear}
      </p>
      <p className="movie-director">
        Director: <br />
        {movieDirector}
      </p>
      <img
        className="movie-image"
        src={moviePoster}
        alt="moviePoster"
      />
    </div>
  );
};

export default MovieCard;
