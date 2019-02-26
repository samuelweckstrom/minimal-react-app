import React from 'react'
import { mount } from 'enzyme'
import App from '../App'

describe('App', () => {
  const wrapper = mount(<App />)
  it('Renders App without errors', () => {
    expect(wrapper).toBeTruthy()
  })
  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
