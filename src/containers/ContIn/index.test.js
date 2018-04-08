import React from 'react'
import { shallow } from 'enzyme';
import Root from 'Root'
import Comp from './'

test('renders without crashing', () => {
  shallow(
    <Root component={Comp} />
  )
})
