import { render, screen } from '@testing-library/react';
import Header from '../Header'

it('should render title prop', async () => {
   render(<Header title="test" />);
   const headeingElement = screen.getByText(/test/i);
   expect(headeingElement).toBeInTheDocument();
});

it('should render title prop', async () => {
   render(<Header title="test" />);
   const headeingElement = screen.getByRole("heading", { name: "Heading" });
   expect(headeingElement).toBeInTheDocument();
});

it('should render title prop', async () => {
   render(<Header title="test" />);
   const headeingElement = await screen.findByText(/test/i);
   expect(headeingElement).toBeInTheDocument();
});

it('should render title prop', async () => {
   render(<Header title="test" />);
   const headeingElement = screen.queryByText(/terfe/i);
   expect(headeingElement).not.toBeInTheDocument();
});

it('should render title prop', async () => {
   render(<Header title="test" />);
   const headeingElements = screen.queryAllByRole("heading");
   expect(headeingElements.length).toBe(2)
});