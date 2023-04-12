import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home"
import Questions from '../src/pages/Questions';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faGithub, faLinkedin);

function App() {
  return (
    
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Questions" element={<Questions />} />
        </Routes>
    </Router>
    
  );
}

export default App;
