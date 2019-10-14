// Test away!

import React from 'react'
import * as rtl from 'react-testing-library'
import 'jest-dom/extend-expect'
import Controls from './Controls'
afterEach(rtl.cleanup)


describe('Controls', () => {
     it('renders correctly', () => {
          const wrapper = rtl.render(<Controls />)
          expect(wrapper.baseElement).toMatchSnapshot();
     })
})