import React, { Component } from 'react'
import * as firebase from 'firebase'

import NewComment from './NewComment/NewComment'
import Comments from './Comments/Comments'

import 'bootstrap-css-only'

class App extends Component {
  constructor(props) {
    super(props)

    this.postNewComment = this.postNewComment.bind(this)

    this.state = {
      comments: {},
      isLoggedIn: false,
      user: {
        name: null,
        photo: null
      }
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

  }

  postNewComment(comment) {
    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`id-${timestamp}`] = comment
    this.setState({
      comments: comments
    })
  }

  auth(provider) {
    const auth = firebase.auth()
    const isLoggedIn = { ...this.state.isLoggedIn }
    const users = { ...this.state.user }
    provider = new firebase.auth.FacebookAuthProvider()
    auth.signInWithPopup(provider)
      .then(result => {
        if (result.user) {
          this.setState({ isLoggedIn: true, user: { name: result.user.displayName, photo: result.user.photoURL } })
        } else {
          this.setState({ isLoggedIn: false, user: {} })
        }
      })
      .catch(error => {
      })
  }

  render() {
    return (
      <div className="container">
        {this.state.isLoggedIn &&
          <div>
            {this.state.user.name}
            <img alt={this.state.user.displayName} src={this.state.user.photo} /> <br/>
            {console.log(this.props.auth)}
            <button onClick={() => this.props.auth.singOut()}>Deslogar</button>
            <NewComment postNewComment={this.postNewComment} />
          </div>}
        {!this.state.isLoggedIn &&
          <div className='alert alert-info'>
            <button onClick={() => this.auth('facebook')}>Entre com o Facebook para comentar</button>
          </div>
        }
        <Comments comments={this.state.comments} />
      </div>
    )
  }
}

export default App
