import React from 'react'
import { render } from '@testing-library/react'
import TestComp from './TestComp'

describe('TestComp Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<TestComp />)
    expect(asFragment()).toMatchSnapshot()
  })
})
