// Test away!

import React from 'react'
import * as rtl from 'react-testing-library'
import 'jest-dom/extend-expect'
import Controls from './Controls'
import { render, fireEvent, wait } from '@testing-library/react';

afterEach(rtl.cleanup)

const originalError = console.error
beforeAll(() => {
     console.error = (...args) => {
          if (/Warning.*not wrapped in act/.test(args[0])) {
               return
          }
          originalError.call(console, ...args)
     }
})

afterAll(() => {
     console.error = originalError
})

// basic unit test - sanity check passed 
describe('Controls', () => {
     it('renders correctly', () => {
          const wrapper = rtl.render(<Controls />)
          expect(wrapper.baseElement).toMatchSnapshot();
     })
})

// mock function - sanity check passed
test('control buttons work', () => {
     const toggleLockedMock = jest.fn();
     const { getByText } = render(
          <Controls toggleLocked={toggleLockedMock}/>
     )
     fireEvent.click(getByText(/close gate/i));
})

// async function
test('close gate button renders lock gate and open gate when clicked', async () => {
     const { queryByText, findByText, getByText } = render(<Controls />)

     const successfulOpenGate = queryByText(/Open Gate/i);
     expect(successfulOpenGate).toBeNull();


     const button = getByText(/close gate/i);
     fireEvent.click(button)
     // await wait ( () => expect(findByText(/Open Gate/i)))
})


