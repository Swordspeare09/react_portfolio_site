import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={Projects} />
        <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
