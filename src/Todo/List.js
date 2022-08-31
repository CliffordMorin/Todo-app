import { useState } from "react";
import "./list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrashCan,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";

const List = ({ text, todoList, setTodoList, todo }) => {
  const [open, setOpen] = useState(false);
  const [editText, setEditText] = useState(text);

  const deleteHandler = (e) => {
    e.preventDefault();
    setTodoList(todoList.filter((el) => el.id !== todo.id));
  };

  const editTextHandler = (e) => {
    setEditText(e.target.value);
  };

  const submitEditHandler = (e) => {
    e.preventDefault();
    // Edit the todo text and set the open state to false
    setTodoList(
      todoList.map((el) => (el.id === todo.id ? { ...el, text: editText } : el))
    );
    setOpen(!open);
  };

  return (
    <div className="list">
      {open ? (
        <input
          type="text"
          className="inputItem"
          maxLength="25"
          minLength="1"
          value={editText}
          onChange={editTextHandler}
        />
      ) : (
        <li className="listItem">{text}</li>
      )}
      {open ? (
        <button
          className="saveButton button"
          type="submit"
          onClick={(e) => {
            submitEditHandler(e);
          }}
        >
          <FontAwesomeIcon icon={faFloppyDisk} />
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
          className="editButton button"
        >
          <FontAwesomeIcon icon={faPen} className="pen" />
        </button>
      )}
      <button onClick={deleteHandler} className="deleteButton button">
        <FontAwesomeIcon icon={faTrashCan} className="trash" />
      </button>
    </div>
  );
};
export default List;
