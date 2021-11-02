import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dropdown.css";

const Dropdown = () => {
  const defaultUser = {
    id: "",
    name: "",
    email: "",
    address: {
      street: "",
    },
  };
  const [users, setUsers] = useState([defaultUser]);
  const [singleUser, setSingleUser] = useState(defaultUser);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .then((error) => console.log(error));
  }, []);

  const onChange = (e) => {
    // alert(e.target.value);
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + e.target.value)
      .then((response) => setSingleUser(response.data))
      .then((error) => console.log(error));
  };

  return (
    <div className="dropdown">
      <select onChange={onChange}>
        <option value="0">Choose User</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <div className="card">
        <h3>Name: {singleUser.name}</h3>
        <h4>Email: {singleUser.email}</h4>
        <h4>Address: {singleUser.address.street}</h4>
      </div>
    </div>
  );
};

export default Dropdown;
