import React from 'react';
import logo from './assets/logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Projects from './components/projects/Projects.jsx';
import Articles from './Articles.jsx';
import About from './components/about/About.jsx';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
      </Routes>
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo" />
          <div className="navigation-sub">
            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
          </div>
        </div>
        <Projects />
      </div>
    </BrowserRouter>
  );
}

export default App;
