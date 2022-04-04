import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Episode from './../Episode'

const testEpisode = {
  id: 101,
  image: null,
  name: '',
  season: 1,
  summary: 'some text',
  runtime: 1,
}

test('renders without error', () => {
  render(<Episode episode={testEpisode} />)
})

test('renders the summary test passed as prop', () => {
  render(<Episode episode={testEpisode} />)
  const summary = screen.queryByText(/some text/i)
  expect(summary).toBeInTheDocument()
  expect(summary).toBeTruthy()
  expect(summary).toHaveTextContent(/some text/i)
})

test('renders default image when image is not defined', () => {
  render(<Episode episode={testEpisode} />)
  const image = screen.queryByAltText(
    'https://i.ibb.co/2FsfXqM/stranger-things.png'
  )
  expect(image).toBeInTheDocument()
})
