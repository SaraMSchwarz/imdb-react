import React, { Component } from 'react'
import './App.css'
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
