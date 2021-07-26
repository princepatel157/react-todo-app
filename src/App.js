import React, { useState } from "react";
import "./App.css";
import img from "./img/him.jpg";

const App = () => {
  const [todo, setTodo] = useState("");

  const [item, setItem] = useState([]);

  const addItem = () => {
    setItem([...item, todo]);
    setTodo("");
  };

  const deleteItem = (ind) => {
    const updatedList = item.filter((item, i) => {
      return ind != i;
    });
    setItem(updatedList);
  };

  return (
    <>
      <div className="main-body">
        {/* bg img div */}
        <div
          className="bg-body"
          style={{ backgroundImage: `url(${img}) ` }}
        ></div>

        {/* main center list frame  */}
        <div className="main-frame">
          {/* main heading */}
          <section className="main-heading">TODO LIST</section>

          {/* edit add todo */}
          <section className="add-todo">
            <input
              type="text"
              className="input-field"
              placeholder="Enter Todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <input
              type="button"
              onClick={addItem}
              className="add-btn"
              value="Add"
            />
          </section>

          {/* todo items */}
          {item.map((element, index) => {
            return (
              <section className="todo-list">
                <div type="text" className="list-item">
                  {element}
                </div>
                <button className="edit-item">
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  onClick={() => deleteItem(index)}
                  className="delete-item"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
