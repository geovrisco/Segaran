import React from 'react';
import {Provider} from 'react-redux'
import store from './store'


import './index.css'
import Navigation  from './config/Navigation'
  
function App() {
  

  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
}

export default App;
