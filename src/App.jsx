import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Appbar from "./components/Appbar";
import FooterApp from "./components/FooterApp";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import TermsAndConditions from "./pages/Terminos";

function App() {
  return (
    <Router>
        <Appbar />
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/FAQ" element={<Faq />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Terminos" element={<TermsAndConditions />}></Route>
            <Route path="*" element={<Landing />}></Route>
          </Routes>
        <FooterApp />
    </Router>
  );
}

export default App;
