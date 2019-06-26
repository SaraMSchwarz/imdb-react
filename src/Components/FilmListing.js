import React, { Component } from 'react'
import FilmRow from './FilmRow.js'

class FilmListing extends React.Component {
  handleFilterClick = (filter) => {
    console.log("Setting filter to " + filter)
     this.setState({filter: filter})
  }
  
  render() {
    const allFilms = this.films.map( (film, index) => (
      <FilmRow film={film} key={film.id} />
    ))

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>

        <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {allFilms}
      </div>
    )
  }
}

export default FilmListing
