import React from "react";
const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <>
    <h1>User List</h1>
    <div  className="userList">
      {users.length === 0 ? (
        <p>No user has been added</p>
        
      ) : (
        users.map((user) => (
          <div key={user.id} className="userItem">
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <button className="editbtn" onClick={() => editUser(user)}>Edit</button>
            <button className="deletebtn"onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
    </>
    
  );
};

export default UserList;
