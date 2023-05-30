import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import CoinsDetail from '../routes/CoinsDetail';

describe('Test CoinsDetail page', () => {
  it('Renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <CoinsDetail />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
