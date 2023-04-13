import React from 'react'
import Square from './Square'

function Board() {
  return (
    <>
      <div className="board-row">
        <Square value={0}/>
        <Square value={1}/>
        <Square value={2}/>
      </div>
      <div className="board-row">
        <Square value={0}/>
        <Square value={1}/>
        <Square value={2}/>
      </div>
      <div className="board-row">
        <Square value={0}/>
        <Square value={1}/>
        <Square value={2}/>
      </div>
    </>
  )
}

export default Board