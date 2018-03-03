import React from 'react'
import Comment from './Comment'

import { shallow, mount, render } from 'enzyme'

describe('<Comment />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Comment />)
    expect(wrapper.length).toBe(1)
  })
})
