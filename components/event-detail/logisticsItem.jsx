import styles from "./logisticsItem.module.css";

const LogisticsItem = ({ icon: Icon, children }) => {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span>{children}</span>
    </li>
  );
};

export default LogisticsItem;
