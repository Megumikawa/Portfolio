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
        <Route path="/about" />
        <Route path="/works" />
        <Route path="/contact" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
