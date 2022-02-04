import React, {useContext, useState} from 'react';
import {Link, useParams}  from 'react-router-dom';
import './bootstrap.css';
import TasksContext from './TasksContext';

function EditTask() {
  const tasks = useContext(TasksContext);
  const id = useParams().id;
  const task = tasks.find(item => item.id == id);
  const [value, setValue] = useState('');

  function timeConverter(UNIX_timestamp){
    var date = new Date(UNIX_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }

  const sendTask = () => {
    console.log(value);
    fetch('http://localhost:7777/posts', {
      method:'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: id, content: value})
    }).then(response=>console.log(response))
  }

  const handleChange = (evt) => {
    setValue(evt.target.value);
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Kirill</h5>
        <h6 className="card-title">{task ? timeConverter(task.created) : false}</h6>
        <p className="card-text">{task ? task.content : false}</p>
        <input className="form-control" type="text" aria-label="default input example" placeholder='Новое описание' onChange={handleChange}/>
        <Link to="/" className="btn btn-primary" onClick={sendTask}>Применить</Link>
        <Link to="/" className="btn btn-warning">Назад</Link>
      </div>
    </div>
  )
}

export default EditTask;
