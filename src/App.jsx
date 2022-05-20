import { useEffect, useState } from "react";
import './_App.scss'
import {Card} from './components/Card'
import  { FaDice }  from 'react-icons/fa' ; 

export const App = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState({})

  const busca = async () => {
    const req = await fetch(`https://api.adviceslip.com/advice/search/${search}`)
    const dados = await req.json()
    setData(dados.slips[Math.floor(Math.random() * dados.slips.length)])
    setSearch('')
  }

  const buscaId = async () => {
    let numberRandom = Math.floor(Math.random() * 224)
    const req = await fetch(`https://api.adviceslip.com/advice/${numberRandom}`)
    const dados = await req.json()
    setData(dados.slip)
  }

  return (
    <div className="main">
      <Card title='Advice' number={data.id} dados={data}/> 

        <div className="box">
          <div className="search">
            <input type="text" placeholder="Theme" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button onClick={busca}>Pesquisar</button>
          </div>
          <div className="dice" onClick={buscaId}>
            <FaDice />
          </div>
        </div>
      
    </div>
  )
}