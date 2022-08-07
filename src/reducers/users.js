const initialState = {
  loading: true,
  users: [],
  error: "",
};

const users = (users = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return users;
  }
};

export default users;
