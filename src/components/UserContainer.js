import React from "react";
import { useSelector } from "react-redux";

function UserContainer() {
  const usersData = useSelector((state) => state.usersData);

  return (
    <div>
      <h3 style={{ textTransform: "uppercase" }}>users Data</h3>
      {usersData.loading && <div>Loading...</div>}
      {usersData.error && <div>{usersData.error}</div>}
      {usersData && usersData.users.length
        ? usersData.users.map((user) => <div key={user.id}>{user.title}</div>)
        : null}
    </div>
  );
}

export default UserContainer;
