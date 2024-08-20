import { useState } from 'react'

export const Counter = () => {
  const [ counter, setCounter ] = useState(0)

  const handleOnClick = () =>{
        setCounter(counter + 1)
  }
  
    return (
      <div>
        <button onClick={handleOnClick}>+1</button>
        <p>{counter}</p>

      </div>
  )
}
