import React from 'react'
import { shallow } from 'enzyme'
import Home from '../'

describe('Home', () => {
  const wrapper = shallow(<Home />)

  it('It matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
