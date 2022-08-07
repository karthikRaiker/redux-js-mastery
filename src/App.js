import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./actions/posts";
import { getUsers } from "./actions/users";
import PostContainer from "./components/PostContainer";
import UserContainer from "./components/UserContainer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <PostContainer />
      <UserContainer />
    </div>
  );
}

export default App;
