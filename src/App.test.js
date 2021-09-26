import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/store";
import React from "react";

test('renders learn react link', () => {
  render(<Provider store={store}>
    <BrowserRouter>
        <React.StrictMode>    
            <App />
        </React.StrictMode>
    </BrowserRouter>
</Provider>);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
