import Card from "../UI/Card";
import Button from "../UI/Buton";
import styles from "./InvalidPopUp.module.css";

const InvalidPopUp = (props) => {
  const closePopUp = () => {
    props.onClose();
  };
  return (
    <div className={styles.popUp}>
      <Card>
        <div className={styles["error-title"]}>
          <h3>Invalid input</h3>
        </div>
        <div className={styles["error-text"]}>
          <p>
            {props.error === "username"
              ? "username should have at least 3 symbols"
              : "please enter a valid age (>0)."}
          </p>
        </div>
        <div className={styles["button-div"]}>
          <Button type="button" onClick={closePopUp}>
            Okay
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default InvalidPopUp;
