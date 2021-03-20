import './App.css';
import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';
// import Home from './components/Home';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
