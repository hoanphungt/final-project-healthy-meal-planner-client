import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store'

class App extends Component {
 render() {
   return (
     <Provider store={store}>
        <h1>Mealplanner! Hi</h1>
     <div className="App">
     </div>
     </Provider>
   );
 }
}

export default App;
