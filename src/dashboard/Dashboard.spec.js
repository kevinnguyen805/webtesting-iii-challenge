// Test away

import React from 'react'
import * as rtl from 'react-testing-library'
import 'jest-dom/extend-expect'
import Dashboard from './Dashboard'
afterEach(rtl.cleanup)

describe("Dashboard", () => {
     it('renders correctly', () => {
          const wrapper = rtl.render(<Dashboard />)
          expect(wrapper.baseElement).toMatchSnapshot();
     })
})