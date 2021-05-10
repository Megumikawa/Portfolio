import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Works from './components/works';
import Contact from './components/contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" />
        <Route path="/About" />
        <Route path="/Works" />
        <Route path="/Contact" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
