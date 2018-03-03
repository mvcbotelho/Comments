import React from 'react'
import Comments from './Comments'

import { shallow, mount, render } from 'enzyme'

describe('<Comments />', () => {
  const comment = {
    1: {
      comment: 'test 1'
    },
    2: {
      comment: 'test 2'
    }
  }
  it('renders without crashing', () => {
    const wrapper = mount(<Comments comments={comments} />)
    expect(wrapper.length).toBe(1)
  })
})
