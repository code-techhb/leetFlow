import styles from "./KanbanBtn.module.css";

const KanbanBtn = ({ toggleModal }) => {
  return (
    <button className={styles.btn} onClick={toggleModal}>
      ➕ Add New LC Problem
    </button>
  );
};

export default KanbanBtn;
