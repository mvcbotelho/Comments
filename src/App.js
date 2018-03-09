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
      user: {}
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    // this.props.auth.onAuthStateChange(user => {
    //   if (user) { 
    //     this.setState({ isLoggedIn: true, user })
    //   } else {
    //     this.setState({ isLoggedIn: false, user: {} })
    //   }
    // })
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
        console.log(this.state.isLoggedIn)
        console.log(this.state.users)
        if(result.user){
          this.setState({ isLoggedIn: true, users })
        }else{
          this.setState({ isLoggedIn: false, user: {} })
        }
        console.log(this.state.isLoggedIn)
        console.log(this.state.users)
      })
      .catch(error => {
      })
  }

  render() {
    return (
      <div className="container">
        {this.state.isLoggedIn && <NewComment postNewComment={this.postNewComment} />}
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
