import React from 'react'
import { shallow } from 'enzyme';
import Comp from './'

it('renders without crashing', () => {
  shallow(<Comp />)
})
