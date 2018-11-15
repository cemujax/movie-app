import React from "react";
import PropTypes from "prop-types";
import "../styles/Movie.css";
import MoviePoster from "./MoviePoster";
import MovieGenre from "./MovieGenre";

import LinesEllipsis from "react-lines-ellipsis";

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres &&
            genres.map((genre, index) => (
              <MovieGenre key={index} genre={genre} />
            ))}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};
export default Movie;
