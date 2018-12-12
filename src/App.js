import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import { Route, Redirect } from 'react-router-dom'
import PlannerListContainer from './components/planner/PlannerListContainer';
import RecipeListContainer from './components/recipes/RecipeListContainer';
import LoginFormContainer from './components/login/LoginFormContainer';
import LogoutPage from './components/logout/LogoutPage';
import SignupFormContainer from './components/signup/SignupFormContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main>
            <Route exact path='/planner' component={PlannerListContainer} />
            <Route exact path='/recipes' component={RecipeListContainer} />
            <Route exact path='/login' component={LoginFormContainer} />
            <Route exact path='/logout' component={LogoutPage} />
            <Route exact path='/signup' component={SignupFormContainer} />
            <Route exact path='/' render={() => <Redirect to='/recipes' />} />
          </main>
          <footer className="App-footer">
            <p>FOOTER</p>
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
