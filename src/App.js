import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardTask from './components/CardTask/CardTask';
import TaskForm from './components/FormTask/TaskForm';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
        <div className="row  justify-content-center">
          <img src={logo} className=" App-logo col-4 mb-4 mt-4" alt="logo" />
        </div>
          <div className="row justify-content-center">
            <div className="col-4">
              <TaskForm />
            </div>
            <div className="col-7  ">
              <CardTask />
            </div>  
          </div>
        </div>

      </div>
    );
  }
}

export default App;
