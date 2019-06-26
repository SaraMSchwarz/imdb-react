import React, { Component } from 'react'
import './App.css'
import TMDB from './TMDB.js'
import FilmListing from './Components/FilmListing.js'
import FilmDetails from './Components/FilmDetails.js'

class App extends React.Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing />,
        <FilmDetails />
      </div>
    );
  }
}

export default App
