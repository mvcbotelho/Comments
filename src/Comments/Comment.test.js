import React from 'react'
import Comment from './Comment'

import { shallow, mount, render } from 'enzyme'

describe('<Comment />', () => {
  const comment = {
    comment: 'test'
  }
  it('renders without crashing', () => {
    const wrapper = shallow(<Comment comment={comment} />)
    expect(wrapper.length).toBe(1)
  })
  it('have a class .card', () => {
    const wrapper = shallow(<Comment comment={comment} />)
    expect(wrapper.is('.card')).toBe(true)
  })
  it('have a class .bg-light', () => {
    const wrapper = shallow(<Comment comment={comment} />)
    expect(wrapper.is('.bg-light')).toBe(true)
  })
  it('have a class .card-body', () => {
    const wrapper = shallow(<Comment comment={comment} />)
    expect(wrapper.is('.card-body')).toBe(true)
  })
  it('Text in comment.comment === test', () => {
    const wrapper = shallow(<Comment comment={comment} />)
    expect(wrapper.text()).toBe(comment.comment)
  })
})
