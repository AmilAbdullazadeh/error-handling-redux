import React from "react";
import { useDispatch, useSelector } from "react-redux";
import todoTypes from "../types/todoTypes";

const ErrorNotification = (props) => {
  const isOpen = useSelector((state) => state.errorReducer.isOpen);
  const error = useSelector((state) => state.errorReducer.error);

  const dispatch = useDispatch();

  function handleClose() {
    dispatch({ type: todoTypes.HIDE_ERROR });
  }

  return (
    <div>
      {isOpen && error && (
        <div class="fancy-error-class">
          <button onClick={() => handleClose()}>Close Error</button>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default ErrorNotification;
