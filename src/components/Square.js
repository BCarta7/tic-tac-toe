import React from 'react'

const Square = (props) => {

  const handleClick = () => {
    props.handleGamePlay(props.index)
    props.plus()
  }

  return (
    <button className="square" onClick={handleClick} disabled={props.value === 'X' || props.value === 'O' || props.winner === "X" || props.winner === "O"}>{props.value}</button>
  )
}
export default Square
