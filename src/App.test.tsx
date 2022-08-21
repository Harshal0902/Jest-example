import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { add, Login } from './App';
import * as ReactDOM from 'react-dom';

// We outline the objectives of the test.:
test('renders learn react link', () => {
  // Arrange: We get ready the testing environment, and rendering the component;
  render(<App />);

  // Act: Look for the anticipated link..
  const linkElement = screen.getByText(/learn react/i);

  // Assert: check that the document contains the necessary link.
  expect(linkElement).toBeInTheDocument();
});


describe('add function', () => {
  describe('when given to integers', () => {
    it("should return a add result", () => {
      // Arrange: Prepare the expected add result and the function arguments.
      // In this example 5 + 8 === 13:
      const [a, b, expected] = [5, 8, 13];

      // Here, we assign "a === 5," "b === 8," and "expected === 13" using array destructuring.

      // Act: To obtain a true function result, utilise the "add" function.
      const result = add(a, b);

      // Assert: Now a function's output is compared to the expected result.
      expect(result).toEqual(expected);
    });
  })
})

describe('Login component tests', () => {
  let container: HTMLDivElement

  // beforeEach: Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Login />, container);
  })

  // to clear everything at the end so that tests don't interrupt each other
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  })

  // Running test to render each input field
  it('Renders all input fields correctly', () => {
    // Selecting the input fields
    const inputs = container.querySelectorAll('input');
    // Asserting that the input fields are rendered correctly
    expect(inputs).toHaveLength(2);

    // Let's check the first and second input field with the name "email" and "password" respectively
    expect(inputs[0].name).toBe('email');
    expect(inputs[1].name).toBe('password');
  });

  // Running test to render each button
  it('Renders all buttons correctly', () => {
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(2);

    expect(buttons[0].type).toBe('button');
    expect(buttons[1].type).toBe('button');
  });

})
