import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Keyboard({ listGuesses, answer }) {

  let keyboard = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
  ].map(letter => ({ letter, status: '' }));

  if (listGuesses.listGuesses.length > 0) {
    listGuesses.listGuesses.forEach(guess => {
      const result = checkGuess(guess.label, answer);
      keyboard.forEach((key, index) => {
        result.forEach(cell => {
          if (cell.letter === key.letter) {
            keyboard[index].status = cell.status;
          }
        })
      });
    });
  };

  const ligne1 = keyboard.slice(0, 10);
  const ligne2 = keyboard.slice(10, 19);
  const ligne3 = keyboard.slice(19, 26);

  return <div className="keyboard" style={{ paddingTop: 'auto' }}>
      <div className="ligne_1">
        {ligne1.map((letter) => <button className={`keyboard-button ${letter.status}`} key={letter.letter}>{letter.letter}</button>)}
      </div>
      <div className="ligne_2">
        <p style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          {ligne2.map((letter) => <button className={`keyboard-button ${letter.status}`} key={letter.letter}>{letter.letter}</button>)}
        </p>
      </div>
      <div className="ligne_3">
        <p style={{ paddingLeft: '64px' }}>
          {ligne3.map((letter) => <button className={`keyboard-button ${letter.status}`} key={letter.letter}>{letter.letter}</button>)}
        </p>
      </div>
    </div>;
}

export default Keyboard;
