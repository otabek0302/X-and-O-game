import React, { useState } from 'react';
import { calculateWiner } from '../helper';
import Board from './Board';
import './Game.css';

const GameComponent = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWiner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) {
      return null;
    }

    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };


  const startNewGame = () => {
    return(
        <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))} >Clean</button>
    )
  }

  return (
    <div className='wrapper'>
        {
            startNewGame()
        }
      <Board squares={board} click={handleClick} />
      <p>
        {
            winner ? "Winner" + winner : `It Is tern of ${xIsNext ? 'X' : 'O'}`
        }
      </p>
    </div>
  );
};

export default GameComponent;
