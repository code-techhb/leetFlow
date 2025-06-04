import Header from "./components/Header/Header";
import KanbanContainer from "./components/KanbanContainer/KanbanContainer";
import Stats from "./components/Stats/Stats";
import AddForm from "./components/AddForm/AddForm";
import { useState } from "react";
import "./index.css";

const App = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = function () {
    setModal(!modal);
    console.log("Add button clicked");
  };

  const closeModal = function () {
    setModal(false);
  };

  return (
    <div className="appContainer">
      <Header />
      <KanbanContainer onToggleModal={toggleModal} />
      {modal && <AddForm onClose={closeModal} />}
      <Stats />
    </div>
  );
};

export default App;
