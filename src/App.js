import React from "react";
import "./App.css";
import img from "./img/him.jpg";

const App = () => {
  return (
    <>
      {/* main body */}
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
            />
            <input type="button" className="add-btn" value="Add" />
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
