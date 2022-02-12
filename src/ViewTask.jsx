import React, {useContext, useState} from 'react';
import {Link, useParams, useNavigate}  from 'react-router-dom';
import './bootstrap.css';
import TasksContext from './TasksContext';

function ViewTask() {
  const tasks = useContext(TasksContext);
  const id = useParams().id;
  const task = tasks.find(item => item.id == id);
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  function timeConverter(UNIX_timestamp){
    var date = new Date(UNIX_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }

  const sendTask = () => {
    fetch('http://localhost:7777/posts', {
      method:'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: id, content: value})
    }).then(navigate('/'))
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
        <Link to={`/posts/edit/${id}`} className="btn btn-primary">Редактировать</Link>
        <Link to="/" className="btn btn-warning">Назад</Link>
      </div>
    </div>
  )
}

export default ViewTask;
