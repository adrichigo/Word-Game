import React from 'react';

function Keyboard() {
  const ligne1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const ligne2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const ligne3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']; 
  
  return <div>
    <div className="keyboard">
      <div className="ligne1">
        {ligne1.map((letter) => <button className='keyboard-button' key={letter}>{letter}</button>)}
      </div>
      <div className="ligne2">
        <p style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          {ligne2.map((letter) => <button className='keyboard-button' key={letter}>{letter}</button>)}
        </p>
      </div>
      <div className="ligne3">
        <p style={{ paddingLeft: '64px'}}>
          {ligne3.map((letter) => <button className='keyboard-button' key={letter}>{letter}</button>)}
        </p>
      </div>
    </div>
  </div>;
}

export default Keyboard;
