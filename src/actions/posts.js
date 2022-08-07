import * as api from "../api";

//Action Creators
const timeout = 2500;
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    setTimeout(() => {
      dispatch({ type: "FETCH_ALL", payload: data });
    }, timeout);
  } catch (error) {
    setTimeout(() => {
      dispatch({ type: "ERROR", payload: error.message });
    }, timeout);
  }
};
