import React, { Component } from "react";
import "./App.css";
import Movie from "./components/Movie";

class App extends Component {
  state = {};
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "movie1",
            poster:
              "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F227DC3335503CCEE277ACC"
          },
          {
            title: "movie2",
            poster:
              "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F227DC3335503CCEE277ACC"
          },
          {
            title: "movie3",
            poster:
              "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F227DC3335503CCEE277ACC"
          },
          {
            title: "movie4",
            poster:
              "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F227DC3335503CCEE277ACC"
          }
        ]
      });
    }, 3000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie key={index} title={movie.title} poster={movie.poster} />;
    });
    return movies;
  };

  render() {
    return <div>{this.state.movies ? this._renderMovies() : "Loaing"}</div>;
  }
}

export default App;
