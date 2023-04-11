import Card from "../UI/Card";
import Button from "../UI/Buton";
import styles from "./InvalidPopUp.module.css";
import ReactDOM from "react-dom";

const InvalidPopUp = (props) => {
  const closePopUp = (e) => {
    if (e.target.matches("#backdrop") || e.target.matches("button"))
      props.onClose();
  };
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={closePopUp} id="backdrop">
          <Card>
            <div className={styles["error-title"]}>
              <h3>{`Invalid ${props.error}`}</h3>
            </div>
            <div className={styles["error-text"]}>
              <p>{props.text}</p>
            </div>
            <div className={styles["button-div"]}>
              <Button type="button" onClick={closePopUp}>
                Okay
              </Button>
            </div>
          </Card>
        </div>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default InvalidPopUp;
