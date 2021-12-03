import React from "react";
import HOC from "./HOC";

const UserList = ({ data }) => {
  const renderedUser = data.map((user) => {
    return (
      <div key={user.id}>
        <div className="userName">{user.username}</div>
      </div>
    );
  });

  return (
    <div>
      <div>{renderedUser}</div>
    </div>
  );
};

const SearchUsers = HOC(UserList, "users");

export default SearchUsers;
