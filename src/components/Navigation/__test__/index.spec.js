import React from 'react'
import { shallow } from 'enzyme'
import Navigation from '../'

describe('Navigation', () => {
  const wrapper = shallow(<Navigation />)
  it('Has two links', () => {
    expect(wrapper.find('nav').children().length).toEqual(2)
  })
  it('Has a first link that points to home', () => {
    expect(
      wrapper
        .find('Link')
        .first()
        .props().to
    ).toBe('/')
  })
  it('Has a link to about', () => {
    expect(wrapper.findWhere(el => el.is('Link') && el.prop('to') === '/about').length).toEqual(1)
  })
  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
