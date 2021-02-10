import uniqid from "uniqid";
import React from "react";

const Overview = (props) => {
  const { tasks, deleteFunction, editFunction, submitFunction } = { ...props };
  return (
    <div>
      {tasks.map((item) => (
        <div key={uniqid()}>
          <span>
            {item.id}. {item.isEdited ? <input type="text"></input> : item.task}
          </span>

          <button
            onClick={() => {
              deleteFunction(item.id);
            }}
          >
            Delet
          </button>
          <button
            onClick={() => {
              item.isEdited ? submitFunction('implementing this would be a waste of time', item.id) : editFunction(item.id);
            }}
          >
            {item.isEdited ? "Submit" : "Edit"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Overview;
