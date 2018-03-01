import React, { Component } from 'react'
import NewComment from './NewComment/NewComment'
import Comments from './Comments/Comments'

import 'bootstrap-css-only'

class App extends Component {
  constructor(props){
    super(props)

    this.postNewComment = this.postNewComment.bind(this)
    
    this.state = {
      comments : {
        '1': {
          comment: 'Primeiro comentário'
        },
        '2': {
          comment: 'Segundo comentário'
        }
      }
    }
  }

  postNewComment(comment){
    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`id-${timestamp}`] = comment
    this.setState({
      comments: comments
    })
  }

  render() {
    return (
      <div className="container">
        <NewComment postNewComment={this.postNewComment} />
        <Comments comments={this.state.comments}/>
      </div>
    )
  }
}

export default App
