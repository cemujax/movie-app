import React from "react";
import PropTypes from "prop-types";

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie_Poster" />;
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default MoviePoster;
