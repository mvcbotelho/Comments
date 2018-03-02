import React from 'react'
import App from './App'

import { shallow, mount, render } from 'enzyme'

describe('<App />', () => {
  const base = {
    syncState: jest.fn()
  }
  it('renders without crashing', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.length).toBe(1)
  })
  it('should have .container class', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.is('.container')).toBe(true)
  })
  it('shows Comments', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('Comments').length).toBe(1)
  })
  it('shows NewComments', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('NewComments').length).toBe(0)
  })
  it('adds a new comment to state when postNewComments is called', () => {
    const wrapper = mount(<App base={base} />)
    wrapper.instance().postNewComment({ comment: 'teste' })
    const comments = Object.keys(wrapper.instance().state.comments)
    expect(comments.length).toBe(1)
  })
  // it('outputs the <App />', () => {
  //   const wrapperShallow = shallow(<App />)
  //   const wrapperMount = mount(<App />)
  //   const wrapperRender = render(<App />)

  //   console.log(wrapperRender.html())
  // })
})
