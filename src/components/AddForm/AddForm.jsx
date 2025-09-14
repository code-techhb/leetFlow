import { useState } from "react";
import styles from "./AddForm.module.css";

const AddForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    difficulty: "",
    url: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Problem title is required";
    }

    if (!formData.difficulty) {
      newErrors.difficulty = "Please select a difficulty level";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        onSubmit({
          title: formData.title.trim(),
          difficulty: formData.difficulty,
          url: formData.url.trim(),
        });

        setFormData({
          title: "",
          difficulty: "",
          url: "",
        });

        setIsSubmitting(false);
      }, 500);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.formContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h3>Add New LC Problem</h3>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldRow}>
            <label htmlFor="title">Title *</label>
            <input
              id="title"
              name="title"
              placeholder="Problem title..."
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              className={errors.title ? styles.errorInput : ""}
            />
            {errors.title && (
              <span className={styles.errorText}>{errors.title}</span>
            )}
          </div>

          <div className={styles.fieldRow}>
            <label htmlFor="difficulty">Difficulty *</label>
            <select
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleInputChange}
              className={errors.difficulty ? styles.errorInput : ""}
            >
              <option value="">Select Difficulty Level</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            {errors.difficulty && (
              <span className={styles.errorText}>{errors.difficulty}</span>
            )}
          </div>

          <div className={styles.fieldRow}>
            <label htmlFor="url">URL (optional)</label>
            <input
              id="url"
              name="url"
              placeholder="Link to the problem"
              type="url"
              value={formData.url}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.buttonRow}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "✓ Adding..." : "Add Problem"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
