import Router from "./router/Router";
import "./App.css";
import { GameProvider } from "./context/GameContext";

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Router />
      </GameProvider>
    </div>
  );
}

export default App;
