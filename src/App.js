import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './store/reducers/index'
import RouterMap from './router/index'


let store = createStore(reducers,applyMiddleware(thunk),window.devToolsExtension ? window.devToolsExtension() : undefined)

window.code = 0;
class App extends Component {
  render() {
    return (
      <Provider store = { store }>
          <RouterMap/>
      </Provider>
    );
  }
}
export default App;
