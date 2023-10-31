import React from 'react'
import { useState , useEffect } from 'react'


export const Test = () => {
    const [count,setCount] = useState(0)
    useEffect (()=>{
        console.log(`The count is `, count)
        return () => {
            console.log('cleanup')
        }
    },[count])

  return (
    <div>
        <h1>Count : {count} </h1>

        <button onClick={()=> setCount(count - 1)} >Decrement </button>
        <button onClick={()=> setCount(count + 1)} >Increment</button>

    </div>
  )
}

export default Test