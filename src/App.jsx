import Header from "./components/Header/Header";
import KanbanContainer from "./components/KanbanContainer/KanbanContainer";
import Stats from "./components/Stats/Stats";
import "./index.css";

const App = () => {
  return (
    <div className="appContainer">
      <Header />
      <KanbanContainer />
      <Stats />
    </div>
  );
};

export default App;
