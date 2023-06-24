import React, {  useState } from "react";

const EditUser = ({ user, updateUser, closeModal }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    //   useEffect(() => {
    //     if (user) {
    //         setName(user.name);
    //         setEmail(user.email);
    //         setPhone(user.phone);
    //     }
    // },[user,setName,setEmail,setPhone])

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation
        if (!name || !email || !phone) {
            alert("Please fill in all fields");
            return;
        }

        // Update the user
        updateUser({ ...user, name, email, phone });

        // Close the modal or navigate back to the main page
        closeModal();
    };

    return (
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
            <button type="submit" >Update User</button>
        </form>
    );
};

export default EditUser;
