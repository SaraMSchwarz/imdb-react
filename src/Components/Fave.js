import React, { Component } from 'react'


class Fave extends React.Component {
  handleClick = (e) => {
    this.setState = {
    isFave: false
}
  }
  render() {
    return (
      <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}

export default Fave
