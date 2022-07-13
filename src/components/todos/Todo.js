import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const Todo = ({ inputs }) => {
  return (
    <div>
      <h2>To Dos'</h2>
      <div>
        <button className="border px-2 m-2">All</button>
        <button className="border px-2 m-2">Done</button>
        <button className="border px-2 m-2">Todo</button>
      </div>
      <div>
        {inputs.map((each) => {
          return (
            <div className="d-flex justify-content-between">
              <p>{each.todo}</p>
              <div>
                <FiEdit />
                <AiFillDelete className="mx-4" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
