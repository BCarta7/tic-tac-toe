import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

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

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
      {squares.map((value, index) => {
        return(
          <Square 
          value={value}
          index={index}
          key={index}
          handleGamePlay={handleGamePlay}
          plus={plus}
        />
        )
      })}
      </div>
    </>
  )
}

export default App