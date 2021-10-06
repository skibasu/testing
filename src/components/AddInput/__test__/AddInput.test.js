import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput'

const mockSetTodo = jest.fn()

describe("AddInput", () => {
   it('should render input element', async () => {
      render(<AddInput todos={[]} setTodos={mockSetTodo} />);
      const inputElement = screen.getByPlaceholderText("Add a new task here...");
      expect(inputElement).toBeVisible();
   });


   it('should be abble to type in to the imput', async () => {
      render(<AddInput todos={[]} setTodos={mockSetTodo} />);

      const inputElement = screen.getByPlaceholderText("Add a new task here...");
      fireEvent.change(inputElement, { target: { value: 'sample text' } })
      expect(inputElement.value).toBe('sample text');
   });

   it('should be abble to type in to the imput', async () => {
      render(<AddInput todos={[]} setTodos={mockSetTodo} />);

      const inputElement = screen.getByPlaceholderText("Add a new task here...");
      fireEvent.change(inputElement, { target: { value: 'sample text' } })
      expect(inputElement.value).toBe('sample text');
   });

   it('should be abble to clear input value after button is clicked', async () => {
      render(<AddInput todos={[]} setTodos={mockSetTodo} />);

      const buttonElement = screen.getByRole("button", { name: /Add/ });
      const inputElement = screen.getByPlaceholderText("Add a new task here...");

      fireEvent.change(inputElement, { target: { value: 'sample text' } })
      fireEvent.click(buttonElement)

      expect(inputElement.value).toBe('');
   });

})