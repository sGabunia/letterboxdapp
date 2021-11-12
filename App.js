import React from 'react';
import Navigator from './navigation/Navigator';
import {Provider} from 'react-redux';
import store from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
