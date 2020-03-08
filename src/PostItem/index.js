import React from 'react'

const Comp = ({ title, body }) => {
  if (!title) {
    return null
  }

  return (
    <div data-testid="post-item">
      <h3 data-testid="post-title">{title}</h3>
      <p data-testid="post-body">{body}</p>
    </div>
  )
}

export default Comp
