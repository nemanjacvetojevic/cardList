import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import CardsList from './components/cardsList/CardsList';
import Input from './components/input/Input.jsx'

import CardAdd from './pages/CardAdd';
import CardEdit from './pages/CardEdit';
import MyCards from './pages/MyCards';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>       
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <Switch>            
            <Route exact path="/cards" component={MyCards} />
            <Route exact path="/cards/add" component={CardAdd} />
            <Route exact path="/cards/:cardId/edit" component={CardEdit} />            
            <Route>
              <Redirect to="/cards" />
            </Route>
          </Switch>        
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
