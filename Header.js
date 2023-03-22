import React, { useState, userffect, useEffect } from "react";

const Header = () => {
  const myItems = JSON.parse(localStorage.getItem("items"));
  const [tasks, setTasks] = useState(myItems || []);
  const [todoo, setTodoo] = useState("");
  const [counties, setCounties] = useState([])
  
  const todooChangeHandler = (event) => {
    setTodoo(event.target.value);
  };
  
  const countiesChangeHandler = (event) => {
    setCounties(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setTasks([...tasks, {todoo1: todoo, counties1: counties}]);
    setTodoo("");
    setCounties("");
  };

  useEffect(() => {
    const dataItems = JSON.stringify(tasks);
    localStorage.setItem("items", dataItems);
  },[tasks]);

  return (
    <div className="Header">
      <form onSubmit={submitHandler}>
        <input type="text" value={todoo} onChange={todooChangeHandler} />

       <input type="text" value={counties} onChange={countiesChangeHandler} />
       <div><button>Add item</button></div>
      </form>
      {tasks.map((task, index) => {
        return <p key={index}>
        {task.todoo1}-{task.counties1}</p>
      })}
    </div>
  );
};
export default Header;
