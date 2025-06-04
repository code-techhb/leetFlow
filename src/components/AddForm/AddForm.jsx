import styles from "./AddForm.module.css";

const AddForm = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.formContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h3>LC Problem</h3>

        <div className={styles.form}>
          <div className={styles.fieldRow}>
            <label>Title</label>
            <input placeholder="Problem title..." type="text" required />
          </div>

          <div className={styles.fieldRow}>
            <label>Difficulty</label>
            <select>
              <option>Level of Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div className={styles.fieldRow}>
            <label>URL</label>
            <input placeholder="link to the problem" type="url" />
          </div>

          <button type="button" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
