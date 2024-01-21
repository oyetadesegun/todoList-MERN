import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs"; // Assuming you are using react-icons for the icons.
import BottomButton from "../BottomButton";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }, [todos]);

  const handleEdit = (id) => {
    axios.put('http://localhost:3001/update/'+id)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  const handleDelete = (id) => {
    console.log(`delete ${id}`)
    axios.delete('http://localhost:3001/delete/'+id)
    .then(result => console.log(result))
    .catch(err => console.log(err));
  }

  return (
    <div className="home">
      <h2 >Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div style={{ marginTop: 40, marginLeft: 20 }}>
          <i>No Record Found...</i>
        </div>
      ) : (
        todos.slice().reverse().map((todo) => (
          <div className="task" key={todo._id}>
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? <BsFillCheckCircleFill className="icon" />:
              <BsCircleFill className="icon" />}
              <p className={todo.done && "line_through"}>{todo.task}</p>
            </div>
            <span>
              <BsFillTrashFill className="icon" onClick={()=>handleDelete(todo._id)} />
            </span>
          </div>
        ))
      )}
      <BottomButton/>
    </div>
  );
}

export default Home;
