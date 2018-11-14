import React, { Component } from "react";

class MoviePoster extends Component {
  render() {
    return <img src={this.props.poster} alt="Movie Poster" />;
  }
}

export default MoviePoster;
