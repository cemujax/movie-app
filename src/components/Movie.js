import React, { Component } from "react";
import "../styles/Movie.css";
import MoviePoster from "./MoviePoster";

class Movie extends Component {
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
