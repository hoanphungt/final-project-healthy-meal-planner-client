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
import AddRepFormContainer from './components/addrep/AddRepFormContainer';
import ShoppingListContainer from './components/shoppingList/ShoppingListContainer';
import RecipeListContainerDays from './components/recipes/RecipeListContainerDays';
import RecipeDetailsContainerDays from './components/recipes/RecipeDetailsContainerDays';
// DAVID TEST
import PlannerRecipeDetailsContainer from './components/recipes/PlannerRecipeDetailsContainer';



class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <Navbar />
          <main className='container'>
            <Route exact path='/addrep' component={AddRepFormContainer} />
            <Route exact path='/planner' component={PlannerListContainer} />
            <Route exact path='/recipes/:id' component={RecipeDetailsContainer} />
            <Route exact path='/recipes' component={RecipeListContainer} />

            <Route exact path='/recipes/days/:id' component={RecipeListContainerDays} />
            <Route exact path='/recipes/days/:dayId/recipes/:id' component={RecipeDetailsContainerDays} />

            <Route exact path='/planner/days/:dayId/recipes/:id' component={PlannerRecipeDetailsContainer} />

            <Route exact path='/shopping-list' component={ShoppingListContainer} />
            <Route exact path='/signup' component={SignupFormContainer} />
            <Route exact path='/login' component={LoginFormContainer} />
            <Route exact path='/logout' component={LogoutPage} />            
            <Route exact path='/' render={() => <Redirect to='/login' />} />

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
