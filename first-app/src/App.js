import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//changed
import Text from './Text.jsx';
import Button from './Button.jsx';
import Contador from './Contador.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload aqui pow.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>


        <Text txt="veja o botao abaixo"></Text>
        <Button txt="Clique aqui"></Button>

        <Contador></Contador>
      </div>
    );
  }
}

export default App;
