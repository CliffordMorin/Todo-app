import "./todoForm.css";
import { useState, useEffect } from "react";
import List from "./List";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faFloppyDisk,
  faMagnifyingGlass,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const TodoForm = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList"))
  );
  const [searchText, setSearchText] = useState("");

  //USE EFFECT
  useEffect(() => {
    window.localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  //Functions
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { text: inputText, id: Math.random() * 1000 }]);
    setInputText("");
  };

  return (
    <div className="listContainer">
      <header className="listHeader">My Todo List</header>
      <button className="logoutButton " onClick={(e) => navigate("/")}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        Logout
      </button>
      <div className="listBackground">
        <div className="listShape"></div>
        <div className="listShape"></div>
      </div>

      <form className="form">
        {open ? (
          <div className="newPostContainer">
            <input
              type="text"
              className="todoInput"
              maxLength="25"
              minLength="2"
              placeholder="What do you need to do?"
              value={inputText}
              onChange={inputTextHandler}
            />
            <button
              className="saveButton button"
              type="submit"
              onClick={(e) => {
                setOpen(!open);
                submitTodoHandler(e);
              }}
            >
              <FontAwesomeIcon icon={faFloppyDisk} />
            </button>
          </div>
        ) : (
          <div></div>
        )}
        <div className="searchContainer">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="magIcon" />
          <input
            type="text"
            placeholder="search..."
            className="searchInput"
            maxLength="25"
            minLength="1"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button
          className="newButton button"
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
        <div className="todoListContainer">
          <ul className="todoList">
            {todoList
              .filter((todo) => {
                if (searchText === "") {
                  return todo;
                } else if (
                  todo.text.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return todo;
                } else {
                  return null;
                }
              })
              .map((todo) => (
                <List
                  todoList={todoList}
                  setTodoList={setTodoList}
                  key={todo.id}
                  text={todo.text}
                  todo={todo}
                />
              ))}
          </ul>
        </div>
      </form>
    </div>
  );
};
export default TodoForm;
