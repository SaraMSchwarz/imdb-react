import React, { Component } from 'react'
import './App.css'
import TMDB from './TMDB.js'
import FilmListing from './Components/FilmListing/FilmListing.js'
import FilmDetails from './Components/FilmDetails/FilmDetails.js'

class App extends React.Component {
  render() {
    return (
      <FilmListing />,
      <FilmDetails />
    );
  }
}

export default App
