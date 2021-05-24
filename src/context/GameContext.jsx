import { createContext, useState } from "react";

const GameContext = createContext({});

export function GameProvider({ children }) {
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);

  function startGame() {
    setStart(true);
  }

  function finishGame(last) {
    setFinish(last);
  }

  const props = { start, startGame, finish, finishGame };

  return <GameContext.Provider value={props}>{children}</GameContext.Provider>;
}

export default GameContext;
