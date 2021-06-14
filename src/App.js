import React from "react";
import {Route, Switch, withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import BackgroundTest from './components/Background/Background';

function App() {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/test" component={BackgroundTest} />
      </Switch>
    </div>
  );
}

export default withRouter(App);

