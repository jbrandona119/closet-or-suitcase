import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      closet: ["hat", "xbox", "shoes"],
      suitcase: ["towel", "socks", "jacket"]
    };
    
  }
  addToSuitcase = (data) => {
   this.setState({suitcase: [...this.state.suitcase, data], closet: this.state.closet.filter(item => item !== data)})
  }
  addToCloset = (data) => {
    this.setState({closet: [...this.setState.closet, data], suitcase: this.setState.closet.filter(item => item !== data)})
  }
  

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Button onClick={}
    </div>
  );
    }
}

export default App;
