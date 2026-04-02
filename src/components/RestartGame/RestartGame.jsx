import React from 'react';

function RestartGame({ handleRestart }) {
  return <div>
    <button onClick={handleRestart} className="restart-btn">
      Restart Game
    </button>
  </div>;
}

export default RestartGame;
