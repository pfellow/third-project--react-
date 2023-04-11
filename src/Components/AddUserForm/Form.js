import { useState } from "react";
import Button from "../UI/Buton";
import Card from "../UI/Card";
import styles from "./Form.module.css";

const Form = (props) => {
  const [usernameInput, setUserNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (usernameInput.length < 3) {
      props.onAddUser(true, "username");
      return;
    }
    if (ageInput < 1 || ageInput > 99) {
      props.onAddUser(true, "age");
      return;
    }
    props.onAddUser(false, {
      id: Math.random(),
      username: usernameInput,
      age: ageInput,
    });
    setUserNameInput("");
    setAgeInput("");
  };
  const inputChangeHadler = (e) => {
    if (e.target.matches("#username")) {
      setUserNameInput(e.target.value);
      return;
    }
    setAgeInput(e.target.value);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          className={styles.input}
          type="text"
          id="username"
          onChange={inputChangeHadler}
          value={usernameInput}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          className={styles.input}
          type="number"
          min="1"
          max="99"
          id="age"
          onChange={inputChangeHadler}
          value={ageInput}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default Form;
