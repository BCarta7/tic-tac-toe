import React from 'react'

const Square = (props) => {

  const handleClick = () => {
    props.handleGamePlay(props.index)
    props.plus()
    if (props.winner === true) {
      return alert("we have a winner!")
    }
  }

  return (
    <button className="square" onClick={handleClick} disabled={props.value === 'X' || props.value === 'O'}>{props.value}</button>
  )
}
export default Square
