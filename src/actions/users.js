import * as api from "../api";

//Action Creators
const timeout = 2500;
export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    setTimeout(() => {
      dispatch({ type: "FETCH_USER", payload: data });
    }, timeout);
  } catch (error) {
    setTimeout(() => {
      dispatch({ type: "ERROR", payload: error.message });
    }, timeout);
  }
};
