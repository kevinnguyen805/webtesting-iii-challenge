// Test away

import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react';
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


// firing event - sanity test passed 
test('display panel locked and unlock render correctly', () => {
     const { getByText } = render(
          <Dashboard />
     )

     // sanity tests pass!!!! 
     fireEvent.click(getByText(/Close Gate/i));
     expect(getByText(/Closed/i))

     fireEvent.click(getByText(/Open Gate/i));
     expect(getByText(/Open/i))
})