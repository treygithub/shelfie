import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Form from './component/Form/Form';


class App extends Component {
  // constructor(props){
  //   super(props);

  // }
  render() {

    return (
      <div className="App">
        <Header/>
        <Form/>
      </div>
    );
  }
}

export default App;
