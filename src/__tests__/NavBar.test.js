import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import store from '../app/store';

describe('NavBar', () => {
  it('render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Top Cryptocurrencies')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders back arrow', () => {
    render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
    );
    expect(screen.getByAltText('back arrow')).toBeInTheDocument();
  });
});
