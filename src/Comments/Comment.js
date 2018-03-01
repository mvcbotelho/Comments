import React, { Component } from 'react'

export default class Comment extends Component{
  render() {
    return(
      <p className="card bg-light card-body">{this.props.comment.comment}</p>
    )
  }
}