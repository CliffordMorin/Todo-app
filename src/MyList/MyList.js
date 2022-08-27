import "./mylist.css";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const MyList = () => {
  return (
    <div className="listContainer">
      <header className="listHeader">My Todo List</header>
      <div className="listBackground">
        <div className="listShape"></div>
        <div className="listShape"></div>
      </div>

      <form className="form">
        <input type="text" className="todo-input" />
        <button className="todo-button" type="submit">
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};
export default MyList;
