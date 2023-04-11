import UserCard from "./UserCard";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card>
      <ul className={styles["user-list"]}>
        {props.users.map((user) => (
          <UserCard key={user.id} user={user}></UserCard>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
