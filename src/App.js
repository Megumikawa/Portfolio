import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Header from './components/Header';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollUp from './components/scroll/ScrollUp';

import { useTranslation } from "react-i18next";


function App() {
  const {t} = useTranslation()
  
  return (
    <div className="main">
      
      <Header />
      {/* <Navbar /> */}
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollUp />
    </div>
  );
}
export default App;