import React from "react";

function ToDoItem(props) {
  const [ischecked, setchecked] = React.useState(false);
  function handleDone() {
    setchecked((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div className="taskelement">
      <li
        style={
          ischecked === true
            ? { textDecoration: "line-through", color: "#acadac" }
            : { textDecoration: null }
        }
      >
        <div className="task">{props.text}</div>
      </li>
      <div className="taskedit">
        <div>
          <button onClick={handleDone}>
            {ischecked === false ? <span>Done</span> : <span>undone</span>}
          </button>
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
