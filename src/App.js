import React from 'react';
import './main.scss';
import Home from './pages/Home'
import Container from "./layouts/Container";
import Header from "./components/Header";
import Main from "./layouts/Main";
import About from "./pages/About";
import Skills from "./pages/Skills";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Main>
          <Switch>
            <Route exact path="/resume">
              {" "}
              <Home />
            </Route>
            <Route exact path="/about" exact>
              {" "}
              <About />
            </Route>
            <Route exact path="/skills" exact>
              {" "}
              <Skills />
            </Route>
          </Switch>
        </Main>
      </Container>
    </Router>
  );
}

export default App;
