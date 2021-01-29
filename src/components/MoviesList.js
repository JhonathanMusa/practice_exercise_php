import React, { Component } from "react";
import PropTypes from "prop-types";
import { Movie } from "./Movie";

class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array,
  };
  render() {
    const { movies } = this.props;
    return (
      <div className="MoviesList">
        {movies.map((movie) => {
          return (
            <Movie
              className="MoviesList-item"
              key={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
            />
          );
        })}
      </div>
    );
  }
}
