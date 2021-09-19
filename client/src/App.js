import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

import { NavigationBar } from "./components/NavigationBar";
import { Layout } from "./components/Layout";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
