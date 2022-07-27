// import React, { useState, useEffect } from 'react'; //for test API
import './css/main.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from './components/index';
import { Home, Green, Hireme, Resources, PageNotFound } from './pages/index';

function App() {

  //test API connection
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="main">
        {/* <p>Test API: {!data ? "Loading..." : data}</p> */}
        {/* <div className="blank-space"></div> */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/green' exact element={<Green />} />
          <Route path='/hireme' exact element={<Hireme />} />
          <Route path='/resources' exact element={<Resources />} />
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