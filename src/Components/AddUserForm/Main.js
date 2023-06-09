import { useState } from "react";
import InvalidPopUp from "./InvalidPopUp";

import Form from "./Form";
import UserList from "./UserList";

import styles from "./Main.module.css";

const USERS = [{ id: 1, username: "David", age: 25 }];

const PopoverDemo = () => {
  const [users, setUsers] = useState(USERS);
  const [error, setError] = useState();

  const addUserHandler = (errorStatus, data) => {
    if (errorStatus === true) {
      setError({
        errorIn: data,
        errorText:
          data === "username"
            ? "Username should have at least 3 symbols"
            : "Please enter a valid age (>0)",
      });
      return;
    }
    setUsers((prevUsers) => [...prevUsers, data]);
  };

  const closePopUp = () => {
    setError(false);
  };
  return (
    <div className={styles.main}>
      <Form onAddUser={addUserHandler} />
      <UserList users={users} />
      {error && (
        <InvalidPopUp
          error={error.errorIn}
          text={error.errorText}
          onClose={closePopUp}
        />
      )}
    </div>
  );
};
export default PopoverDemo;
