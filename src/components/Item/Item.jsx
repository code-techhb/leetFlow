import styles from "./Item.module.css";

const Item = () => {
  const problems = [
    "Two Sum",
    "Array Sum",
    "Hashmap",
    "Binary Search",
    "Merge Intervals",
    "Reverse Linked List",
    "Valid Parentheses",
    "Longest Substring Without Repeating Characters",
    "Climbing Stairs",
    "Maximum Subarray",
  ];

  return (
    <div className={styles.itemList}>
      {problems.map((problem, index) => (
        <div key={index} className={styles.itemRow}>
          <span className={styles.checkbox}>○</span>
          <span className={styles.problemName}>{problem}</span>
        </div>
      ))}
    </div>
  );
};

export default Item;
