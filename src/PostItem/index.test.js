import React from 'react'
import { render } from '@testing-library/react'
import PostItem from './index'

it('should have post-item', () => {
  const { getByTestId } = render(<PostItem title="My first todo" />)
  const postItem = getByTestId('post-item')
  expect(postItem).toBeTruthy()
})

it('should return null when does not send title', () => {
  const { queryByTestId } = render(<PostItem />)
  const postItem = queryByTestId('post-item')
  expect(postItem).toBe(null)
})

it('should contain title in component', () => {
  const title = 'My first todo'
  const { getByTestId } = render(<PostItem title={title} />)
  const postTitle = getByTestId('post-title')
  expect(postTitle).toHaveTextContent(title)
})

it('should contain body in component', () => {
  const title = 'My first todo'
  const body = 'My first todo body'
  const { getByTestId } = render(<PostItem title={title} body={body} />)
  const postBody = getByTestId('post-body')
  expect(postBody).toHaveTextContent(body)
})
