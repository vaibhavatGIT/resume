import React from 'react';
import './main.scss';
import Home from './pages/Home'
import Container from "./layouts/Container";
import Header from "./components/Header";
import Main from "./layouts/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Header />
    //   <Container>
    //     <Main>
    //       <Home/>
    //     </Main>
    //   </Container>
    // </Router>
    <div style={{backgroundColor:'red'}}>

      <h1> VAibhav test hahahah</h1>
    </div>
  );
}

export default App;
