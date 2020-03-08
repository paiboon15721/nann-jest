import React from 'react'
import PropTypes from 'prop-types'

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

Comp.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
}

export default Comp
