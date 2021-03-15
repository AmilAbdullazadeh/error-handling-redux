import todoTypes from "../types/todoTypes";

export function loadTodoRequest() {
  return {
    type: todoTypes.GET_TODO_REQUEST,
  };
}

export function loadTodoSuccess(results) {
  return {
    type: todoTypes.GET_TODO_SUCCESS,
    data: results,
    error: null,
  };
}

export function loadTodoError(error) {
  return {
    type: todoTypes.GET_TODO_SUCCESS,
    data: null,
    error: error,
  };
}
