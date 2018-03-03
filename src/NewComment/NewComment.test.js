import React from 'react'
import NewComment from './NewComment'

import { shallow, mount, render } from 'enzyme'

describe('<NewComment />', () => {
  const posrNewCommentMock = jest.fn()
  it('renders without crashing', () => {
    const wrapper = shallow(<NewComment postNewComment={posrNewCommentMock} />)
    expect(wrapper.length).toBe(1)
  })
  it('handleOnKeyPress', () => {
    const wrapper = mount(<NewComment postNewComment={posrNewCommentMock} />)
    const eventMock = {
      keyCode: 13,
      preventDefault: jest.fn()
    }
    wrapper.instance().refs.comment.value = 'test'
    wrapper.instance().handleOnKeyPress(eventMock)
    expect(wrapper.length).toBe(1)
    expect(eventMock.preventDefault.mock.calls.length).toBe(1)
    expect(posrNewCommentMock.mock.calls.length).toBe(1)
    expect(wrapper.instance().refs.comment.value).toBe('')
    expect(posrNewCommentMock.mock.calls[0][0].comment).toBe('test')
  })
})
