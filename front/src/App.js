// import React, { useState, useEffect } from 'react'; //for test API
import './css/main.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from './components/index';
import { Home, Hireme, Resume, Projects, PageNotFound } from './pages/index';

function App() {

  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="main">
        <Routes>
          <Route path='/' exact element={<Home />} />
          {/* <Route path='/green' exact element={<Green />} /> */}
          <Route path='/hireme' exact element={<Hireme />} />
          <Route path='/resume' exact element={<Resume />} />
          <Route path='/projects' exact element={<Projects />} />
          {/* <Route path='/resources' exact element={<Resources />} /> */}
          <Route path='*' element={<PageNotFound />} />
          {/* <Route path='/blog' exact element={<Blog />} /> */}
        </Routes>
        </div>
        <Footer className="footer"/>
      </Router>
    </div>
  )
}

export default App;