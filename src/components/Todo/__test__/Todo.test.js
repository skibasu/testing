import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo'

const MockTodo = () => <BrowserRouter><Todo /></BrowserRouter>
const addTasks = (tasks) => {
   const inputElement = screen.getByPlaceholderText("Add a new task here...");
   const buttonElement = screen.getByRole("button", { name: /Add/ });
   tasks.forEach(element => {
      fireEvent.change(inputElement, { target: { value: element } })
      fireEvent.click(buttonElement)
   });

}

describe("Todo", () => {
   it('should render same text passed into title prop', async () => {
      render(<MockTodo />);
      addTasks(['task 1'])
      const divElements = screen.getAllByTestId('task-wrapper')
      expect(divElements.length).toBe(1);
   });

   it('should render all task', async () => {
      render(<MockTodo />);
      addTasks(['task 1', 'task 2'])
      const divElements = screen.getAllByTestId('task-wrapper')
      expect(divElements.length).toBe(2);

   });

   it('should not have todo-item-active class on render', async () => {
      render(<MockTodo />);
      addTasks(['task 1'])
      const divElement = screen.getByText('task 1')
      expect(divElement).not.toHaveClass('todo-item-active');

   });

   it('should have todo-item-active class after clicked', async () => {
      render(<MockTodo />);
      addTasks(['task 1'])
      const divElement = screen.getByText('task 1')
      fireEvent.click(divElement)
      expect(divElement).toHaveClass('todo-item-active');

   });


})