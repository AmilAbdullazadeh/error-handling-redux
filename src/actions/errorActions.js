import todoTypes from "../todoTypes";

export function setError(error) {
  return {
    type: todoTypes.SET_ERROR,
    error: error,
  };
}

export function hideError() {
  return {
    type: todoTypes.HIDE_ERROR,
  };
}