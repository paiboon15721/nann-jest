import React from 'react'
import { render, fireEvent, waitForElement, act } from '@testing-library/react'
import axiosMock from 'axios'
import PostList from './index'

jest.mock('axios')

it('should have fetch-button', () => {
  const { getByTestId } = render(<PostList />)
  const fetchButton = getByTestId('fetch-button')
  expect(fetchButton).toBeTruthy()
})

describe('axios fetch', () => {
  beforeEach(() => {
    axiosMock.get.mockResolvedValueOnce({
      data: [{ title: 'hello there', body: 'todo body' }],
    })
  })

  it('should fetch data when click fetch-button', async () => {
    const { getByTestId } = render(<PostList />)
    const fetchButton = getByTestId('fetch-button')
    const url = 'https://jsonplaceholder.typicode.com/posts'
    await act(async () => {
      fireEvent.click(fetchButton)
    })
    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(axiosMock.get).toHaveBeenCalledWith(url)
  })

  it('should contain correct title when click fetch-button', async () => {
    const { getByTestId } = render(<PostList />)
    const fetchButton = getByTestId('fetch-button')
    await act(async () => {
      fireEvent.click(fetchButton)
    })
    const postTitle = await waitForElement(() => getByTestId('post-title'))
    expect(postTitle).toHaveTextContent('hello there')
  })
})
