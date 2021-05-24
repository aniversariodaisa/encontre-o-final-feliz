import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import logo from "..//..//assets/logo.png";
import logoIsa from "..//..//assets/logo-isa.png";
import { useContext, useState } from "react";
import GameContext from "../../context/GameContext";
import questions from "..//..//questions.json";
import messages from "..//..//messages.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#fae6e7",
  },
  paper: {
    padding: theme.spacing(2),
    width: "120vh",
    margin: "10vh",
    textAlign: "center",
    fontSize: "2.5vh",
    backgroundColor: "#f191ac",
    color: "#fae6e7",
  },
  button: {
    background: "#f191ac",
    marginRight: "2vh",
    color: "#fae6e7",
  },
  cardAction: {
    justifyContent: "center",
  },
  logo: {
    maxWidth: "20vh",
    marginTop: "5vh",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  card: {
    background: "#fae6e7",
    color: "#f191ac",
    textAlign: "center",
    width: "50vh",
  },
}));

function Game() {
  const { finish, finishGame } = useContext(GameContext);
  const classes = useStyles();

  const [question, setQuestion] = useState(questions[0]);
  const [message, setMessage] = useState({});

  function generateAnswers() {
    const answers = question.options;
    return answers.map((answer, key) => (
      <Button
        key={key}
        variant="contained"
        color="default"
        size="large"
        className={classes.button}
        onClick={() => verifyNext(answer)}
      >
        {answer.description}
      </Button>
    ));
  }

  function verifyNext(answer) {
    if (answer.last) {
      finishGame(true);
      setMessage(messages.find((message) => message.id === answer.message));
    } else {
      setQuestion(questions.find((question) => question.id === answer.next));
    }
  }

  function restartGame() {
    setQuestion(questions[0]);
    finishGame(false);
  }

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <img src={logo} alt="logo" />
      {finish ? (
        <Grid container alignItems="center" justify="center">
          <Card className={classes.card} raised>
            <CardContent>
              {message.happy ? (
                <>
                  <Typography variant="h4" component="h2">
                    😍 😍 😍
                  </Typography>
                  <Typography variant="h6" component="h2">
                    CÓDIGO: #chegueiAoFinalFeliz
                  </Typography>
                </>
              ) : (
                <Typography variant="h4" component="h2">
                  😭 😭 😭
                </Typography>
              )}
            </CardContent>
            <CardMedia className={classes.media} image={message.image} />
            <Typography variant="h6" component="h2">
              {message.title}
            </Typography>
            <CardActions className={classes.cardAction}>
              <Button
                variant="contained"
                color="default"
                size="large"
                className={classes.button}
                onClick={() => restartGame()}
              >
                Jogar Novamente!
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ) : (
        <>
          <Grid container alignItems="center" justify="center">
            <Paper className={classes.paper}>{question.description}</Paper>
          </Grid>
          <Grid container alignItems="center" justify="center">
            {generateAnswers()}
          </Grid>
        </>
      )}
      <img src={logoIsa} alt="logoIsa" className={classes.logo} />
    </Grid>
  );
}

export default Game;
