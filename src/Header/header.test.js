import React from 'react'
import { render } from '@testing-library/react'
import Header from './index'

const { getByTestId } = render(<Header />)
const header = getByTestId('header')

it('should have header', () => {
  expect(header).toBeTruthy()
})

it('should contain My todo list text', () => {
  expect(header).toHaveTextContent('My todo list')
})
