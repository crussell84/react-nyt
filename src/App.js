import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Header from './components/Header'

import './App.css';

class App extends React.Component {

  componentDidMount() {
    axios.get("/api/test").then(data => {
      console.log("Api Response", data);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
