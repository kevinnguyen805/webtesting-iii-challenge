// Test away!

import React from 'react'
import * as rtl from 'react-testing-library'
import 'jest-dom/extend-expect'
import Controls from './Controls'
import { render, fireEvent, wait, waitForElement } from '@testing-library/react';

afterEach(rtl.cleanup)


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
test('close gate button reflects state of the door when clicked', async () => {
     const { queryByText, findByText, getByText } = render(<Controls />)

     const successfulOpenGate = queryByText(/Open Gate/i);
     expect(successfulOpenGate).toBeNull();


     const button = getByText(/close gate/i);
     fireEvent.click(button)
     // await wait ( () => expect(findByText(/Open Gate/i)))
})


// test for disabled toggle buttons 
test('closed toggle is disabled if the gate is locked', () => {
     const closedClassMock = jest.fn();
     const { getByText } = render(
          <Controls className={closedClassMock} />
     )

     const button = getByText(/Close Gate/i)
     fireEvent.click(button)
     expect(closedClassMock).not.toHaveBeenCalled();
})

test('Lock gate toggle button is not enabled when the gate is open', () => {
     const lockedClassMock = jest.fn();

     const { getByText } = render(
          <Controls className={lockedClassMock} />
     )

     fireEvent.click(getByText(/Lock Gate/i))
     expect(lockedClassMock).not.toHaveBeenCalled();
})


// testing for locked toggle function
test('close gate will disable the locked disable function ', () => {
     const {getByText} = render(
          <Controls />
     )

     fireEvent.click(getByText(/Close Gate/i))
     expect(getByText(/Lock Gate/i)).toBeDisabled();
})

test('clicking lock gate will enable close gate button functionality', () => {
     const {getByText} = render(
          <Controls />
     )

     fireEvent.click(getByText(/Close Gate/i))
     fireEvent.click(getByText(/Lock Gate/i))
     expect(getByText(/Close Gate/i)).not.toBeDisabled()
})
test('Unlock button will be falsy', () => {
     const disabledMock = jest.fn()
     const {getByText} = render(
          <Controls disabled={disabledMock} />
     )

     fireEvent.click(getByText(/Close Gate/i))
     fireEvent.click(getByText(/Lock Gate/i))
     expect(disabledMock).toBeFalsy();
})