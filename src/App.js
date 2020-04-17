import React from 'react';
import './App.css';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Skills from './components/Skills'
import AppNavbar from './components/AppNavbar'
import Footer from './components/Footer'
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Documents from './components/Documents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <AppNavbar/>
        <Switch>
          <Route exact path="/home" component={About}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/documents" component={Documents}/>
          <Redirect to="/home" />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
