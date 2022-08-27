import "./mylist.css";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

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
          <i className="fas fa-plus-square"></i>
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
