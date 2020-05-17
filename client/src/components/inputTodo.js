import React, { Fragment } from "react";

const InputTodo = () => {
  return (
    <Fragment>
      <h1 className="text-center mt-5">Input Todo</h1>
      <form>
        <input type="text" className="" />
        <button>Add Todo</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
