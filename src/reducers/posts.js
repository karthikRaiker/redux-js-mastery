const initialState = {
  loading: true,
  posts: [],
  error: "",
};

const posts = (posts = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return posts;
  }
};

export default posts;
