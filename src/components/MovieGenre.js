import React from "react";
import PropTypes from "prop-types";
import "../styles/Movie.css";

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre}</span>;
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default MovieGenre;
