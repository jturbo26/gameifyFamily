import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the app!!!!</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default App;
