import styles from "./KanbanContainer.module.css";
import KanbanBtn from "../KanbanBtn/KanbanBtn";
import Card from "../Card/Card";

const KanbanContainer = ({ onToggleModal }) => {
  return (
    <section className={styles.wrapper}>
      <KanbanBtn toggleModal={onToggleModal} />
      <div className={styles.kanban}>{/* <Card /> */}</div>
    </section>
  );
};

export default KanbanContainer;
