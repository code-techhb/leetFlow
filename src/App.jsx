import Header from "./components/Header/Header";
import KanbanContainer from "./components/KanbanContainer/KanbanContainer";
import Stats from "./components/Stats/Stats";
import AddForm from "./components/AddForm/AddForm";
import { useState, useEffect } from "react";
import "./index.css";

const App = () => {
  const [modal, setModal] = useState(false);
  const [problems, setProblems] = useState([]);

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
    };

    setProblems((prev) => [...prev, newProblem]);
    closeModal();
  };

  const moveProblem = (problemId, newStatus) => {
    setProblems((prev) =>
      prev.map((problem) =>
        problem.id === problemId ? { ...problem, status: newStatus } : problem
      )
    );
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
      />
      {modal && <AddForm onClose={closeModal} onSubmit={addProblem} />}
      <Stats stats={stats} />
    </div>
  );
};

export default App;
