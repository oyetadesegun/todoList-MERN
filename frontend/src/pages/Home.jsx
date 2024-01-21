import React, { useEffect, useState } from "react";
import Create from "../Components/Create";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs"; // Assuming you are using react-icons for the icons.
import BottomButton from "../Components/BottomButton";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://todolist-1yar.onrender.com/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, [todos]);

  const handleEdit = (id) => {
    axios
      .put("https://todolist-1yar.onrender.com/update/" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    console.log(`delete ${id}`);
    axios
      .delete("https://todolist-1yar.onrender.com/delete/" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div style={{ marginTop: 40, marginLeft: 20 }}>
          <i>No Record Found...</i>
        </div>
      ) : (
        todos
          .slice()
          .reverse()
          .map((todo) => (
            <div className="task" key={todo._id}>
              <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                {todo.done ? (
                  <BsFillCheckCircleFill className="icon" />
                ) : (
                  <BsCircleFill className="icon" />
                )}
                <p className={todo.done && "line_through"}>{todo.task}</p>
              </div>
              <span>
                <BsFillTrashFill
                  className="icon"
                  onClick={() => handleDelete(todo._id)}
                />
              </span>
            </div>
          ))
      )}
      <Link to="https://todolist-1yar.onrender.com/api-docs/" target="_blank">
      <BottomButton  />
      </Link>
    </div>
  );
}

export default Home;
