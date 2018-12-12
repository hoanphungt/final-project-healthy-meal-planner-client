import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import { Route } from 'react-router-dom'
import PlannerListContainer from './components/planner/PlannerListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route exact path='/planner' component={PlannerListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
