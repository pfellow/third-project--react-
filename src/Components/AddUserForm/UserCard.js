import styles from "./UserCard.module.css";

const UserCard = (props) => {
  return (
    <li
      className={styles["user-card"]}
    >{`${props.user.username} (${props.user.age} year(s) old)`}</li>
  );
};

export default UserCard;
