import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <NavTabs />
        <Route exact path="/react_portfolio_site" component={Home} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
