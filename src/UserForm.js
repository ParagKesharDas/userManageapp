import React, { useState } from "react";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }

    // Add the user
    addUser({ name, email, phone });

    // Clear the form fields
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
    <h1>Add User</h1>
    <form onSubmit={handleSubmit}>
    <label htmlFor='name'>Name:</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    <label htmlFor='email'>Email:</label>  
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    <label htmlFor='phone'>Phone:</label>  
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className="addbtn" type="submit">Add User</button>
    </form>
    </>
    
  );
};

export default UserForm;
