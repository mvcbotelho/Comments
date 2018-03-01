import React, { Component } from 'react'

export default class NewComment extends Component {
  constructor(props){
    super(props)
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this)
  }

  handleOnKeyPress(e) {
    if(e.keyCode === 13) {
      this.props.postNewComment({
        comment: this.refs.comment.value
      })
      this.refs.comment.value = ''
      e.preventDefault()
    }
  }
  render() {
    return(
      <div className='row'>
      <h1>TESTE</h1>
      <textarea 
        ref='comment'
        placeholder='Deixe o seu comentário!' 
        className='form-control'
        onKeyDown={this.handleOnKeyPress}>
      </textarea>
      </div>
    )
  }
}