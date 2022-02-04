import React, {useState} from 'react';
import {Link}  from 'react-router-dom';
import './bootstrap.css';

function NewTask() {
  const [value, setValue] = useState('');


  const sendTask = () => {
    console.log(value);
    fetch('http://localhost:7777/posts', {
      method:'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: 0, content: value})
    }).then(response=>console.log(response))
  }

  const handleChange = (evt) => {
    setValue(evt.target.value);
  }

  return (
    <div className="card">
      <div className="card-body">
        <input className="form-control" type="text" placeholder="Новый пост" aria-label="default input example" onChange={handleChange}/>
        <Link to="/" className="btn btn-primary" onClick={sendTask}>Опубликовать</Link>
        <Link to="/" className="btn btn-warning">Назад</Link>
      </div>
    </div>
  )
}

export default NewTask;
