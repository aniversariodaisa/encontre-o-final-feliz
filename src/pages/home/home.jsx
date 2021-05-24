import { Button, Grid } from "@material-ui/core";
import { useContext } from "react";
import GameContext from "../../context/GameContext";
import logo from "..//..//assets/logo.png";

function Home() {
  const { startGame } = useContext(GameContext);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "90vh" }}
    >
      <img src={logo} alt="logo" />
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ background: "#f191ac" }}
          onClick={() => startGame()}
        >
          Iniciar Jogo
        </Button>
      </Grid>
    </Grid>
  );
}

export default Home;
