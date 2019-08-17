import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from '../../components/layout/NavBar';

import Home from '../Home/Home';

function Blog(){
  return <h2> Blog </h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
          <div className="container">
            <Switch>
                <Route exact path='/users'  component={Home} />
                <Route path='/blog' component={Blog} />
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
