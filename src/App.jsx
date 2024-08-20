import { useEffect, useState } from 'react'
import {Counter} from './Counter'

import './App.css'

function App() {
  const [ input, setInput ] = useState('')
  const [ gifs, setGifs ] = useState([])

  const handleInput = (e) =>{
    const valor = e.target.value
    setInput(valor)
  }

      const getGifs = async(query) =>{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=MhzEvcKZSCB6ILAct1Wj0lLxfJ1aNC74&q=${query}`
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        return data.data
      }
  
    const handleOnSubmit =async (e) =>{
      e.preventDefault()
      const gifs = await getGifs(input)
      setGifs(gifs)
    }

  return (
    <div className='App'>
    <form action="" onSubmit={handleOnSubmit}>
      <input type="text" value={input} onChange={handleInput}/>
    </form>
    {
      gifs.map((gif) =>(
        <img key={gif.id} src={gif.images.original.url} alt={gif.title} />
      ))
    }
      <p>{ input }</p>
      <Counter/>
      </div>
  )
}

export default App
