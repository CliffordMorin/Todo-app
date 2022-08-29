import React from "react";
import "./list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const List = ({ id, text }) => {
  return (
    <div className="list">
      <li className="listItem" id={id}>
        {text}
      </li>
      <button className="editButton button">
        <FontAwesomeIcon icon={faPen} className="pen" />
      </button>
      <button className="deleteButton button">
        <FontAwesomeIcon icon={faTrashCan} className="trash" />
      </button>
    </div>
  );
};
export default List;
