import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import HomePage from '../routes/HomePage';

describe('Test HomePage', () => {
  it('Renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
