import React, { useRef } from 'react';
//import Posts from './components/Posts';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Work from './components/Work';
import './App.css';

function App() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  // https://flatuicolors.com/palette/gb
  return (
    <div className="App">
      <Home contactRef={contactRef} aboutRef={aboutRef} workRef={workRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
      <Work ref={workRef} />
      {/* <Posts /> */}
    </div>
  );
}

export default App;
