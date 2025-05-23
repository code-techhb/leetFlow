import Item from "../Item/Item";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <article className={styles.cardContainer}>
      <header className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Array</h2>
        <div className={styles.progressInfo}>
          <span className={styles.progressText}>0 / 3</span>
        </div>
      </header>
      <div className={styles.items}>
        <Item />
      </div>
    </article>
  );
};

export default Card;
