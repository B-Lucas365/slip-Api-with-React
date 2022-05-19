import { useEffect, useState } from "react";

export const App = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState({})

  const busca = async () => {
    const req = await fetch(`https://api.adviceslip.com/advice/search/${search}`)
    const dados = await req.json()
    setData(dados.slips[Math.floor(Math.random() * dados.slips.length)])
  }

  return (
    <div>
      <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={busca}>Pesquisar</button>
      <p>{data.advice}</p>
    </div>
  )
}