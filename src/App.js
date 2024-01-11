import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Works from './Components/Works';
import Footer from './Components/Footer';
import Font from 'react-font';
import Services from './Components/Services';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-233672292-1');
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Font family='Genos'>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Services />
                  <About />
                  <Works />
                  <Contact />
                </>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </Font>
    </>
  );
};

export default App;
