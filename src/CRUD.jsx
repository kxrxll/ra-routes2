import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link}  from 'react-router-dom';
import './bootstrap.css';

function CRUD() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Kirill</h5>
        <h6 className="card-title">20.11.1987</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/new" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default CRUD;
