import React, { Component } from 'react'

export default class Comments extends Component {
  render() {
    return (
      <div>
        <h2>Comentários aqui!!!!</h2>
        <div>{JSON.stringify(this.props.comments)}</div>
      </div>
    )
  }
}