import React from 'react'
import App from './App'

import { shallow, mount, render } from 'enzyme'

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.length).toBe(1)
  })
  it('should have .container class', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.is('.container')).toBe(true)
  })
  it('shows Comments', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Comments').length).toBe(1)
  })
  it('shows NewComments', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('NewComments').length).toBe(0)
  })
  // it('outputs the <App />', () => {
  //   const wrapperShallow = shallow(<App />)
  //   const wrapperMount = mount(<App />)
  //   const wrapperRender = render(<App />)

  //   console.log(wrapperRender.html())
  // })
})
