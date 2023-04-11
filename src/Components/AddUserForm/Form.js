import { useRef } from "react";
import Button from "../UI/Buton";
import Card from "../UI/Card";
import styles from "./Form.module.css";

const Form = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = (event) => {
    const userNameInput = nameInputRef.current.value;
    const ageInput = ageInputRef.current.value;

    event.preventDefault();
    if (userNameInput.trim().length < 3) {
      props.onAddUser(true, "username");
      return;
    }
    if (ageInput < 1 || ageInput > 99) {
      props.onAddUser(true, "age");
      return;
    }
    props.onAddUser(false, {
      id: Math.random(),
      username: userNameInput,
      age: ageInput,
    });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          className={styles.input}
          type="text"
          id="username"
          ref={nameInputRef}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          className={styles.input}
          type="number"
          min="1"
          max="99"
          id="age"
          ref={ageInputRef}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default Form;
