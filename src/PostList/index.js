import React, { useState } from 'react'
import axios from 'axios'
import PostItem from '../PostItem'

const Comp = () => {
  const [posts, setPosts] = useState([])

  return (
    <div>
      <button
        data-testid="fetch-button"
        onClick={async () => {
          const { data } = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
          )
          setPosts(data)
        }}
      >
        Fetch Button
      </button>
      {posts.map(v => (
        <PostItem key={v.title} title={v.title} body={v.body} />
      ))}
    </div>
  )
}

export default Comp
