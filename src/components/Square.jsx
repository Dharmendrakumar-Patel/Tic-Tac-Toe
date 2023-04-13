import React, {useState} from 'react'

function Square() {
  const [value, setValue] = useState(null)

  const clickHandler = () => {
    setValue('X')
  }
  
  return (
    <button className="square" onClick={clickHandler}>{value}</button>
  )
}

export default Square