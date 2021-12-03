import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/about';
import Work from './pages/work';
import Contact from './pages/contact';
// import Header from './components/header';

function App() {
  return (
  <Router>
    {/* <Header /> */}
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/work">
        <Work />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
