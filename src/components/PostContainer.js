import React from "react";
import { useSelector } from "react-redux";

function PostContainer({ user }) {
  const data = useSelector((state) => state.posts);

  return (
    <div>
      {data.loading && <div>Loading...</div>}
      {data.error && <div>{data.error}</div>}

      {data && data.posts.length
        ? data.posts.map((item) => <div key={item.id}>{item.title}</div>)
        : null}
    </div>
  );
}

export default PostContainer;
