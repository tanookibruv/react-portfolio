import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Work from './pages/work';
import Contact from './pages/contact';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/work" element={<Work/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
