// Test away!
import React from 'react'
import * as rtl from 'react-testing-library'
import 'jest-dom/extend-expect'
import Display from './Display'
afterEach(rtl.cleanup)

// tests for displaying gate 
describe("Display", () => {
     it("renders correctly", () => {
          const wrapper = rtl.render(<Display />)
          expect(wrapper.baseElement).toMatchSnapshot();
     })
})

// displays 'closed' if the closed prop is true 


