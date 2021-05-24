import { useContext } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import GameContext from "../context/GameContext";
import Game from "../pages/game/game";
import Home from "../pages/home/home";

function Router() {
  const { start } = useContext(GameContext);

  return (
    <BrowserRouter>
      <Route exact path="/" component={start ? Game : Home} />
      <Redirect to="/" />
    </BrowserRouter>
  );
}

export default Router;
