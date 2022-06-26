import { render, screen } from '@testing-library/react';
import SearchComponent from './SearchComponent';
import userEvent from '@testing-library/user-event';    

describe('Async component', () => {

    test('renders initial state', () => {
        render(<SearchComponent />);     
        const initialState = screen.getByText('Search Result Will Display Here');
        expect(initialState).toBeInTheDocument();
      });

      test('renders when search button clicks', () => {
        render(<SearchComponent />);
        const buttonElement = screen.getByText('Search');
        userEvent.click(buttonElement)
        const outputElement = screen.queryByText('Search Result Will Display Here', { exact: false });
        expect(outputElement).toBeInTheDocument();
      });



    test('renders response if API request and fails', async () => {
        // window.fetch = jest.fn();
        // window.fetch.mockImplementationOnce(() =>
        //   Promise.reject(new Error())
        // );

      
    
        render(<SearchComponent />);
    
        await userEvent.click(screen.getByRole('button')); 
        const message = await screen.findAllByText('Something went wrong'); 
    
        expect(message).not.toHaveLength(0);
      });
});