import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/ContactMe";
import NoMatch from "./pages/NoMatch";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import Blog from './components/Blog/Blog'
// import Sidebar from './components/Sidebar/Sidebar'
// import Introduction from './components/Introduction/Introduction'

function App() {
  return (
    <Router>
      <div className="main">
        <Navbar />
        <Switch>
          <Route
            exact
            path={[
              process.env.PUBLIC_URL + "/",
              process.env.PUBLIC_URL + "/home",
            ]}
          >
            <Home />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/about"}>
            <About />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/contact"}>
            <Contact />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/portfolio"}>
            <Portfolio />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <div className="push"></div>
      </div>
      <Footer className="footer" />
    </Router>
  );
}

export default App;
