import React from "react";
import PropTypes from "prop-types";
import "../styles/Movie.css";
import MoviePoster from "./MoviePoster";
import MovieGenre from "./MovieGenre";

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie_Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie_Columns">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres &&
            genres.map((genre, index) => (
              <MovieGenre key={index} genre={genre} />
            ))}
        </div>
        <p className="Movie_Synopsis">{synopsis}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};
export default Movie;
