import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/Home';
import About from './components/About';
// import Works from './components/works';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <About />
      {/* <Works /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
