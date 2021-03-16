import React from "react";

function TodoItem(props) {
  return (
    <>
      <div className="todo-items">
        <label class="checkbox">
          <input type="checkbox" />
        </label>
        <p>
          {props.proppedChore.id}: {props.proppedChore.chore}
        </p>
      </div>
    </>
  );
}

export default TodoItem;
