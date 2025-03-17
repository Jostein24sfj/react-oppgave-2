import React, { useState } from "react";
import styles from "./usercomponent.module.css";

export default function UserComponent() {
  const initialUsers = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];
  const [userName, setUserName] = useState(initialUsers);
  const [newUser, setNewUser] = useState({ username: "", email: "" });

  function handleUpdate(e) {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  }

  function addUser() {
    setUserName((prev) => [...prev, newUser]);
    setNewUser({ username: "", email: "" });
  }

  return (
    <div>
      {userName.map((user, i) => {
        return (
          <div key={i}>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
          </div>
        );
      })}
      <div className={styles.inputfield}>
        <input
          type="text"
          placeholder="Username"
          onChange={handleUpdate}
          name="username"
          value={newUser.username}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={handleUpdate}
          name="email"
          value={newUser.email}
        />
        <button onClick={addUser}>Add User</button>
      </div>
    </div>
  );
}
