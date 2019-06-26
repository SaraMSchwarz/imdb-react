import React, { Component } from 'react'
import FilmPoster from './FilmPoster.js'
import Fave from './Fave.js'


class FilmRow extends React.Component {
  render() {
    return (
      <div className="film-row">
        <FilmPoster film={this.props.film} />

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{new Date(this.props.film.release_date).getFullyear()}</p>
        </div>
        <Fave />
      </div>
    )
  }
}

export default FilmRow
