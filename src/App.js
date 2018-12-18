import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import { Route, Redirect } from 'react-router-dom'
import PlannerListContainer from './components/planner/PlannerListContainer';
import RecipeListContainer from './components/recipes/RecipeListContainer';
import RecipeDetailsContainer from './components/recipes/RecipeDetailsContainer';
import LoginFormContainer from './components/login/LoginFormContainer';
import LogoutPage from './components/logout/LogoutPage';
import SignupFormContainer from './components/signup/SignupFormContainer';
import { Footer } from './components/footer/Footer';
import './App.css'
import Navbar from './components/navbar/Navbar'
import ShoppingListContainer from './components/shoppingList/ShoppingListContainer';



class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <Navbar />
          <main className='container'>
            <Route exact path='/planner' component={PlannerListContainer} />
            <Route exact path='/recipes/:id' component={RecipeDetailsContainer} />
            <Route exact path='/recipes' component={RecipeListContainer} />
            <Route exact path='/shopping-list' component={ShoppingListContainer} />
            <Route exact path='/signup' component={SignupFormContainer} />
            <Route exact path='/login' component={LoginFormContainer} />
            <Route exact path='/logout' component={LogoutPage} />            
            <Route exact path='/' render={() => <Redirect to='/planner' />} />
          </main>
          <footer className="App-footer">
            <Footer />
          </footer>  
        </div>
      </Provider>
    );
  }
}

export default App;
