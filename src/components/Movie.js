import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/Movie.css";
import MoviePoster from "./MoviePoster";

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };
  render() {
    const { title, poster } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <MoviePoster poster={poster} />
      </div>
    );
  }
}

export default Movie;
