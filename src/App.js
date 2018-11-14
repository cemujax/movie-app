import React, { Component } from "react";
import "./App.css";
import Movie from "./components/Movie";

const movies = [
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
];
class App extends Component {
  render() {
    return (
      <div>
        {movies.map((movie, index) => {
          return (
            <Movie key={index} title={movie.title} poster={movie.poster} />
          );
        })}
      </div>
    );
  }
}

export default App;
