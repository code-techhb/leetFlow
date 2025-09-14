import styles from "./KanbanContainer.module.css";
import KanbanBtn from "../KanbanBtn/KanbanBtn";
import Card from "../Card/Card";

const KanbanContainer = ({
  onToggleModal,
  // problems,
  onMoveProblem,
  onDeleteProblem,
  getProblemsByStatus,
}) => {
  const cardConfigs = [
    {
      id: "problems",
      title: "Problems",
      status: "problems",
      nextStatus: "solved-once",
      actionType: "solve",
      actionText: "Mark as Solved",
    },
    {
      id: "solved-once",
      title: "Solved Once",
      status: "solved-once",
      nextStatus: "reviewed",
      actionType: "checkbox",
      actionText: "Mark as Reviewed",
    },
    {
      id: "reviewed",
      title: "Problems Reviewed",
      status: "reviewed",
      nextStatus: "mastered",
      actionType: "checkbox",
      actionText: "Mark as Mastered",
    },
    {
      id: "mastered",
      title: "Problems Mastered",
      status: "mastered",
      nextStatus: null,
      actionType: "completed",
      actionText: "Mastered!",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <KanbanBtn toggleModal={onToggleModal} />
      <div className={styles.kanban}>
        {cardConfigs.map((config) => (
          <Card
            key={config.id}
            title={config.title}
            problems={getProblemsByStatus(config.status)}
            onMoveProblem={onMoveProblem}
            onDeleteProblem={onDeleteProblem}
            actionType={config.actionType}
            actionText={config.actionText}
            nextStatus={config.nextStatus}
          />
        ))}
      </div>
    </section>
  );
};

export default KanbanContainer;
