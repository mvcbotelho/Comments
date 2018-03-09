import React from 'react'

const Comment = props => (
  <div className='card bg-light mb-3'>
    <p className="card-body">{props.comment.comment}</p>
  </div>
)

export default Comment