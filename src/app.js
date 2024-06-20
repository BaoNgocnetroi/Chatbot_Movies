// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/header';
import Home from './pages/home';
import ChatBot from './components/chatbot';
import BookingHistory from './components/bookinghistory';
import AboutUs from './components/about_us';
import Account from './components/account';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chatbot" component={ChatBot} />
          <Route path="/history" component={BookingHistory} />
          <Route path="/about" component={AboutUs} />
          <Route path="/account" component={Account} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
