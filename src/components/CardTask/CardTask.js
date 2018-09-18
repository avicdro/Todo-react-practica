import React, { Component } from 'react';
import './CardTask.css';

class CardTask extends Component {
  // constructor() {
  //   super();

  // }

  render() {
    return (
      <div className="card card-w" >
        <h5 className="card-header"> Lista de tareas </h5>
        <div className="card-body">

          <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, doloremque?</p>
        </div>
        <a href="" className="btn btn-primary"> Agregar </a>
      </div>
    );
  }
}

export default CardTask;