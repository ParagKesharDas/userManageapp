import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import EditUser from "./EditUser";
function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const history = useNavigate();
  // Function to add a new user
  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
    history('/view')
  };

  // Function to delete a user
  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  // Function to edit a user
  const editUser = (user) => {
    setEditingUser(user);
    history('/edit')
  };

  // Function to update a user
  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) =>
        user.id === updatedUser.id ? { ...updatedUser } : user
      )
    );
  };

  // Function to close the edit user modal
  const closeModal = () => {
    history('/view')
  };

  return (
    <>
      <Header title="User Management App" />
      <Nav />
      <div className="Main">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/addUser' element={<UserForm addUser={addUser} />} />
          <Route exact path='/view' element={<UserList
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />} />
          <Route exact path='/edit' element={ <EditUser
          user={editingUser}
          updateUser={updateUser}
          closeModal={closeModal}
        />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
