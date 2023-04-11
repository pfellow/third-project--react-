import styles from "./UserCard.module.css";

const UserCard = (props) => {
  return (
    <div
      className={styles["user-card"]}
    >{`${props.user.username} (${props.user.age} year(s) old)`}</div>
  );
};

export default UserCard;
