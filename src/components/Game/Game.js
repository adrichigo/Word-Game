import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guess from '../Guess/Guess';
import NUM_OF_GUESSES_ALLOWED from '../../constants';
import { range } from '../../utils';
import RestartGame from '../RestartGame/RestartGame';
import Keyboard from '../Keyboard/Keyboard';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [listGuesses, setListGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [gameWon, setGameWon] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const id = React.useId();

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function handleSubmit(guess) {
    const newGuess = { label: guess, id: crypto.randomUUID() };
    const newGuesses = [...listGuesses, newGuess];
    setListGuesses(newGuesses);
    setCounter(counter + 1);
    if (guess === answer && newGuesses.length <= NUM_OF_GUESSES_ALLOWED) {
      setGameWon(true);
    }
    if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
    }
  }

  function handleRestart() {
    setListGuesses([]);
    setGameOver(false);
    setGameWon(false);
    setCounter(0);
    setAnswer(sample(WORDS));
  }

  return <>
    {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
      <Guess
        thisGuess={listGuesses[num]}
        key={id + num}
        answer={answer}
      />
    ))}
    <GuessInput handleSubmit={handleSubmit} gameOver={gameOver || gameWon} />
    <Keyboard />
    {gameOver && !gameWon &&
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        <RestartGame handleRestart={handleRestart}/>
      </div>
    }
    {gameWon &&
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {counter} guesses</strong>.
        </p>
        <RestartGame handleRestart={handleRestart}/>
      </div>
    }
    
  </>
}

export default Game;
