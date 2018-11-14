import React from "react";
import PropTypes from "prop-types";
import "../styles/Movie.css";
import MoviePoster from "./MoviePoster";

function Movie({ title, poster }) {
  return (
    <div>
      <h1>{title}</h1>
      <MoviePoster poster={poster} />
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};
export default Movie;
