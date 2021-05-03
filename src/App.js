import './App.css';
import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import about from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

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
