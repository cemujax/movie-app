import React from "react";
import PropTypes from "prop-types";

function MovieGenre({ genre }) {
  return <span className="Movie_Genre">{genre}</span>;
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};
export default MovieGenre;
