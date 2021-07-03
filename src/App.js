import React from "react";
// import {Route, Switch, withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { useTranslation } from "react-i18next";




function App() {
  const {t} = useTranslation()
  
  return (
    <div className="main">
    <h1>{t("greeting")}</h1>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;