import React from 'react';
import Nav from './Nav';
import Home from './Home';
import ItemDetail from './ItemDetails';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/:id'} component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
