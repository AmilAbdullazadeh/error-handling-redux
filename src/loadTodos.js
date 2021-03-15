import axios from "axios";
import todoActions from "./actions/todoActions";

export const loadTodos = () => {
  return async function (dispatch) {
    dispatch(todoActions.loadTodoRequest());
    try {
      var response = (await axios.get("http://api.com/todo/all")).data;

      if (response.status === "ok") {
        // check if the internal status is ok
        dispatch(todoActions.loadTodoSuccess(response.data));
      } else {
        // if internally there are errors
        dispatch(todoActions.loadTodoError(response.error));
      }
    } catch (error) {
      // any HTTP error is caught here
      dispatch(todoActions.loadTodoError(response.error));
    }
  };
};
