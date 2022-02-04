import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link}  from 'react-router-dom';
import CRUD from './CRUD';
import NewTask from './NewTask';
import EditTask from './EditTask';
import TasksProvider from './TasksProvider';

function App() {
  return (
    <TasksProvider>
      <Router>
        <div>
          <div className="page">
            <Routes>
              <Route path="/" exact element={<CRUD/>} />
              <Route path="/new" exact element={<NewTask/>} />
              <Route path="/posts/:id" element={<EditTask/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </TasksProvider>
  )
}

export default App;
