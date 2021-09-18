import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from "./components/Layout";

import Home from "./pages/Home";
import { NavigationBar } from "./components/NavigationBar";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/" component={About} />
          <Route path="/" component={NoMatch} /> */}
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
