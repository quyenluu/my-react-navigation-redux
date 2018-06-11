import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppWithNavigationState from './src/navigation/AppNavigator';

import { AppStore } from './src/redux/store/AppStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={AppStore}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
