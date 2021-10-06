import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList'
import { BrowserRouter } from "react-router-dom"

const MockFollowersList = () => <BrowserRouter><FollowersList /></BrowserRouter>

it('should render first item', async () => {
   render(<MockFollowersList />);
   const listElement = await screen.findByTestId(/follower-item-0/i);
   expect(listElement).toBeInTheDocument();
});

