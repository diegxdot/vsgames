import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Appbar from "./components/Appbar";
import Navbar from "./components/Navbar";
import FooterApp from "./components/FooterApp";
import { customTheme } from "./theme";

import { Grommet, Page, PageContent } from "grommet";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Terminos from "./pages/Terminos";
import Faq from "./pages/Faq";

function App() {
  return (
    <Router>
      <Grommet theme={customTheme} background="bg" full>
      <Page>
        <Appbar />
        <Navbar />
        <PageContent>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/FAQ" element={<Faq />}></Route>
            <Route path="/Terminos" element={<Terminos />}></Route>
            <Route path="*" element={<Landing />}></Route>
          </Routes>
        </PageContent>
        <FooterApp />
      </Page>
    </Grommet>
    </Router>
  );
}

export default App;
