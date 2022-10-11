import React from 'react';
import './css/main.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from './components/index';
import { Home, PageNotFound } from './pages/index';

function App() {

  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="main">
        <Routes>
          <Route path='/' exact element={<Home />} />
          {/* <Route path='/resume' exact element={<Resume />} /> */}
          {/* <Route path='/projects' exact element={<Projects />} /> */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer className="footer"/>
      </Router>
    </div>
  )
}

export default App;