// Test away!
import React from 'react'
import * as rtl from 'react-testing-library'
import { render, fireEvent, wait } from '@testing-library/react';
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
// otherwise it will be open if false 
test ("displays closed if the closed prop is true", () => {
     const {getByText} = render(
          <Display />
     )
     expect(getByText(/open/i))
})

test ("Unlocked is true for unlocked div", () => {
     const {getByText} = render(
          <Display />
     )
     expect(getByText(/Unlocked/i)).toBeTruthy();
}) 


