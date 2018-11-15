import React, { Component } from "react";
import "./App.css";
import Movie from "./components/Movie";

class App extends Component {
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies: movies
    });
  };

  _callApi = () => {
    return fetch(
      "https://yts.am/api/v2/list_movies.json?sort_by=download_count"
    )
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.warn(err));
  };

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return (
        <Movie
          key={movie.id}
          title={movie.title_english}
          poster={movie.large_cover_image}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  render() {
    return <div>{this.state.movies ? this._renderMovies() : "Loaing"}</div>;
  }
}

export default App;
