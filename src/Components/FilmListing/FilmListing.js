import React, { Component } from 'react'
import FilmRow from '../FilmRow/FilmRow.js'

class FilmListing extends React.Component {
  render() {
    const allFilms = this.props.films.map( (film, index) => (
      <FilmRow film={film} key={film.id} />
    ))

    return (
      <div>
        <h1>FILMS</h1>
        {allFilms}
      </div>
    )
  }
}

export default FilmListing
