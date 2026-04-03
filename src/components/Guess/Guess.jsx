import { range } from '../../utils';
import {checkGuess} from '../../game-helpers';

function Guess({ thisGuess, answer }) {
  let result = checkGuess(thisGuess?.label, answer);
  result = result || range(5).map(() => ({ letter: '', status: '' }));

  return (
    <div className="guess">
      {result.map((cell, idx) => (
        <span className={`cell ${cell.status}`} key={idx}>
          {cell.letter}
        </span>
      ))}
    </div>
  );
}

export default Guess;