import React from 'react';

function GuessInput({ handleSubmit, gameOver }) {
  const [guess, setGuess] = React.useState('');

  return <div>
    <form className="guess-input-wrapper" onSubmit={event => {
      event.preventDefault();
      handleSubmit(guess.toUpperCase());
      setGuess('');
    }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameOver}
        id="guess-input"
        type="text"
        pattern='[A-Z]{5}'
        minLength={5}
        maxLength={5}
        title='Only 5 letters wors are accepted'
        value={guess.toUpperCase()}
        onChange={(event) => setGuess(event.target.value)}
      />
    </form>
  </div>;
}

export default GuessInput;
