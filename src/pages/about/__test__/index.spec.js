import React from 'react'
import { shallow } from 'enzyme'
import About from '../'

describe('About', () => {
  const wrapper = shallow(<About />)

  it('It matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
