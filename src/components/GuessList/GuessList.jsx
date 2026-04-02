import React from 'react';

function GuessList({ listGuesses }) {

  return <>
    <div className="guess-results">
      {listGuesses.map((guess) => (
        <p key={guess.id} className="guess">
          {guess.label}
        </p>))
      }
    </div>
  </>
}

export default GuessList;
