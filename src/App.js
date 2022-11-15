import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const resetState = () => {
    setSquares(Array(9).fill(null))
    setCounter(2)
  }

  const handleGamePlay = (index) => {
    let updatedBoard = [...squares]
    if (counter % 2 === 0) {
      updatedBoard[index] = "X"
      setSquares(updatedBoard)
    } else {
      updatedBoard[index] = "O"
      setSquares(updatedBoard)
    }
  }

  const [counter, setCounter] = useState(2)
  const plus = () => {
    setCounter(counter+1)
  }
  console.log(counter)

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      } 
    }
    return null;
  }

  const winner = calculateWinner(squares)

  let status;
  if (winner === "X") {
    status = "VICTORY FOR PLAYER 1"
  } else if (winner === "O") {
    status = "VICTORY FOR PLAYER 2"
  } else if (counter === 11) {
    status = "STALEMATE"
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <p>Player 1 gets X. Player 2 gets O</p>
      <button className="restart" onClick={resetState}>Start new game</button>
      <h2>{status}</h2>
      <div className="gameboard">
      {squares.map((value, index) => {
        return(
          <Square 
          value={value}
          index={index}
          key={index}
          handleGamePlay={handleGamePlay}
          plus={plus}
          winner={winner}
          status={status}
        />
        )
      })}
      </div>
    </>
  )
}

export default App