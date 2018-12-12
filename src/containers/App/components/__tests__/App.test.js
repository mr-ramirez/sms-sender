import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

jest.mock('../../../../components/Spinner', () => 'Spinner');

describe('App.js', () => {
  const mockedStore = {
    dispatch: jest.fn(),
    getState: jest.fn(),
    subscribe: jest.fn(),
  };

  const mockedPropsApp = {
    loading: true,
    members: [{
      id: 10,
    }],
  };

  it('THEN it should render with a spinner and the search component', () => {
    const component = renderer.create(
      <App
        app={mockedPropsApp}
        store={mockedStore} />,
    );
    const tree = component.toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});
