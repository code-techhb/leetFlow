import styles from "./KanbanContainer.module.css";
import KanbanBtn from "../KanbanBtn/KanbanBtn";
import Card from "../Card/Card";
const KanbanContainer = () => {
  return (
    <section className={styles.wrapper}>
      <KanbanBtn />
      <div className={styles.kanban}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default KanbanContainer;
