import React from "react";

function ToDoItem(props) {

  return (
    <div className="taskelement">
		<h4>{props.title}</h4>
      <li>
        <div className="task">{props.text}</div>

		
      </li>
      <div className="taskedit">
        <div>
          <button
            onClick={() => {
              props.onChecked(props.id);
            }}
          >
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
