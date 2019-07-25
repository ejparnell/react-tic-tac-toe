import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, withRouter } from 'react-router-dom';

import Home from './components/Home'

function App() {
  return (
    <React.Fragment>
      <Route path='/' component={(Home)} />
    </React.Fragment>
  );
}

export default App;
