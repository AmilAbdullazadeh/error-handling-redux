import todoTypes from "../types/todoTypes";

const initState = {
  error: null,
  isOpen: false,
};

export function errorReducer(state = initState, action) {
  const { error } = action;

  if (error) {
    return {
      error: error,
      isOpen: true,
    };
  } else if (action.type === todoTypes.HIDE_ERROR) {
    return {
      error: null,
      isOpen: false,
    };
  }

  return state;
}
