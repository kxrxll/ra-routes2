import React, {useState, useEffect} from "react";
import TasksContext from "./TasksContext";

export default function TasksProvider(props) {
  const [tasks, setTasks] = useState([]);

  function getList() {
    fetch('http://localhost:7777/posts').then(response=>response.json()).then(result=>setTasks(result));
  }

  useEffect(()=>{
    getList();
  }, []);

  return (
  <TasksContext.Provider value={tasks}>
    {props.children}
  </TasksContext.Provider>
  )
  }