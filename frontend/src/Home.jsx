import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsCircleFill, BsFillTrashFill } from "react-icons/bs"; // Assuming you are using react-icons for the icons.

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }, [todos]);
const handleEdit = ()=>{

}
  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div style={{ marginTop: 40, marginLeft: 20 }}>
          <i>No Record Found...</i>
        </div>
      ) : (
        todos.slice().reverse().map((todo) => (

          <div className="task" key={todo._id}>
            <div className="checkbox" onClick={handleEdit}>
              <BsCircleFill className="icon" />
              <p>{todo.task}</p>
            </div>
            <span>
              <BsFillTrashFill className="icon" />
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
