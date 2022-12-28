import React from 'react'

const Square = (props) => {

  const handleClick = () => {
    props.handleGamePlay(props.index)
    props.plus()
  }

  return (
    <button className="square" onClick={handleClick} disabled={props.value === '❎' || props.value === '🅾️' || props.winner === "❎" || props.winner === "🅾️"}>{props.value}</button>
  )
}
export default Square
