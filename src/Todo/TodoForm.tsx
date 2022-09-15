import "./todoForm.css";
import { useState, useEffect } from "react";
import List from "./List.tsx";
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faFloppyDisk,
  faMagnifyingGlass,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const TodoForm = ({ authenticated, setAuthenticated, animate, setAnimate }) => {
  // const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  //set the todoList from local storage if it exists or create an empty array if it doesn't
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [searchText, setSearchText] = useState("");

  //USE EFFECT
  //Every time the todoList changes, save it to local storage
  useEffect(() => {
    window.localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  //Functions
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    //if the input text is not empty, add it to the todoList and reset the input text
    if (inputText !== "") {
      /* add the new todo to the todoList, there is a better way to generate the id using a package 
      like react-id-generator or uuid but I'm not using those packages for this project */
      setTodoList([...todoList, { text: inputText, id: Math.random() * 1000 }]);
      setInputText("");
    } else {
      alert("Please enter something to do! Life is too short to do nothing!");
    }
  };

  //Logout user
  const logoutHandler = (e) => {
    e.preventDefault();
    setAnimate(true);
    setTimeout(() => {
      setAuthenticated(false);
      localStorage.setItem("authenticated", false);
      setAnimate(false);
    }, 2000);
  };

  return (
    <div className="listContainer">
      <header className="listHeader">My Todo List</header>
      <button className="logoutButton " onClick={logoutHandler}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        Logout
      </button>
      <div className="listBackground">
        <div
          className="listShape circle3"
          style={{
            animation: animate
              ? "slideDown 2s ease-in-out infinite alternate"
              : "none",
          }}
        ></div>
        <div
          className="listShape circle4"
          style={{
            animation: animate
              ? "slideUp 2s ease-in-out infinite alternate"
              : "none",
          }}
        ></div>
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
              className="saveNewButton button"
              type="submit"
              onClick={(e) => {
                setOpen(!open);
                submitTodoHandler(e);
              }}
            >
              <FontAwesomeIcon icon={faFloppyDisk} className="floppyIcon" />
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
