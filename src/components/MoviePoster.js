import React, { Component } from "react";
import PropTypes from "prop-types";

class MoviePoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired
  };
  render() {
    return <img src={this.props.poster} alt="Movie Poster" />;
  }
}

export default MoviePoster;
