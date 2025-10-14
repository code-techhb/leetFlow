import Header from "./components/Header/Header";
import KanbanContainer from "./components/KanbanContainer/KanbanContainer";
import Stats from "./components/Stats/Stats";
import AddForm from "./components/AddForm/AddForm";
import Confetti from "./components/Confetti/Confetti";
import { useState, useEffect } from "react";
import "./index.css";

const App = () => {
  const [modal, setModal] = useState(false);
  const [problems, setProblems] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  // Load problems from localStorage on component mount
  useEffect(() => {
    const savedProblems = localStorage.getItem("leetcode-problems");
    if (savedProblems) {
      try {
        setProblems(JSON.parse(savedProblems));
      } catch (error) {
        console.error("Error parsing saved problems:", error);
        setProblems([]);
      }
    }
  }, []);

  // Save problems to localStorage whenever problems change
  useEffect(() => {
    if (problems.length > 0) {
      localStorage.setItem("leetcode-problems", JSON.stringify(problems));
    }
  }, [problems]);

  const toggleModal = function () {
    setModal(!modal);
    console.log("Add button clicked");
  };

  const closeModal = function () {
    setModal(false);
  };

  // Add new problem function
  const addProblem = (problemData) => {
    const newProblem = {
      id: Date.now(),
      title: problemData.title,
      difficulty: problemData.difficulty,
      url: problemData.url || "",
      status: "problems",
      createdAt: new Date().toISOString(),
      solvedAt: null,
      reviewedAt: null,
      masteredAt: null,
    };

    setProblems((prev) => [...prev, newProblem]);
    closeModal();
  };

  // Clear or Reset Progress
  const clearAllProblems = () => {
    if (
      window.confirm(
        "Are you sure you want to delete ALL problems? This cannot be undone."
      )
    ) {
      setProblems([]);
      localStorage.removeItem("leetcode-problems");
    }
  };

  const resetProgress = () => {
    if (
      window.confirm(
        'Are you sure you want to reset ALL progress? All problems will move back to "Problems" column.'
      )
    ) {
      setProblems((prev) =>
        prev.map((problem) => ({ ...problem, status: "problems" }))
      );
    }
  };

  const moveProblem = (problemId, newStatus) => {
    setProblems((prev) =>
      prev.map((problem) => {
        if (problem.id === problemId) {
          const updates = { ...problem, status: newStatus };

          if (newStatus === "solved-once") {
            updates.solvedAt = new Date().toISOString();
          } else if (newStatus === "reviewed") {
            updates.reviewedAt = new Date().toISOString();
          } else if (newStatus === "mastered") {
            updates.masteredAt = new Date().toISOString();
          }

          return updates;
        }
        return problem;
      })
    );

    if (newStatus === "mastered") {
      setShowConfetti(true);
    }
  };

  const deleteProblem = (problemId) => {
    setProblems((prev) => prev.filter((problem) => problem.id !== problemId));
  };

  const getProblemsByStatus = (status) => {
    return problems.filter((problem) => problem.status === status);
  };

  // Calculate stats
  const stats = {
    problems: getProblemsByStatus("problems").length,
    solvedOnce: getProblemsByStatus("solved-once").length,
    reviewed: getProblemsByStatus("reviewed").length,
    mastered: getProblemsByStatus("mastered").length,
  };

  return (
    <div className="appContainer">
      <Header />
      <KanbanContainer
        onToggleModal={toggleModal}
        problems={problems}
        onMoveProblem={moveProblem}
        onDeleteProblem={deleteProblem}
        getProblemsByStatus={getProblemsByStatus}
        onClearAll={clearAllProblems}
        onResetProgress={resetProgress}
      />
      {modal && <AddForm onClose={closeModal} onSubmit={addProblem} />}
      <Stats stats={stats} />
      <Confetti
        trigger={showConfetti}
        onComplete={() => setShowConfetti(false)}
      />
    </div>
  );
};

export default App;
