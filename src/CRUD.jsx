import { nanoid } from 'nanoid';
import React, {useState, useEffect} from 'react';
import {Link}  from 'react-router-dom';
import './bootstrap.css';

function CRUD() {
  const [list, setList] = useState([]);

  useEffect(()=>{
    getList();
  }, []);

  function getList() {
    fetch('http://localhost:7777/posts').then(response=>response.json()).then(result=>setList(result));
  }

  function timeConverter(UNIX_timestamp){
    var date = new Date(UNIX_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }

  const handleDelete = (evt) => {
    evt.preventDefault();
    fetch(`http://localhost:7777/posts/${evt.target.id}`, {method: 'DELETE'}).then(response => response.ok ? getList() : false);
  }

  return (
  <>
    <div className="card">
      <div className="card-body">
        <Link to="/new" className="btn btn-primary">New task</Link>
      </div>
    </div>
    {list.map(item => <div className="card" key={nanoid()}>
      <div className="card-body">
        <h5 className="card-title">Kirill</h5>
        <h6 className="card-title">{timeConverter(item.created)}</h6>
        <p className="card-text">{item.content}</p>
        <Link to={`/posts/${item.id}`} className="btn btn-primary" item={item}>Редактировать</Link>
        <button className="btn btn-warning" onClick={handleDelete} id={item.id}>Удалить</button>
      </div>
    </div>)}
  </>
  )
}

export default CRUD;
