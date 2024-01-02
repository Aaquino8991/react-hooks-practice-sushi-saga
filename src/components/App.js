import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [remainingSushis, setRemainingSushis] = useState([])
  const [fourSushis, setFourSushis] = useState([])
  const [budget, setBudget] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data =>{
      const allSushis = data.map(s => {
        return {...s, eaten: false}
      })
      const four = allSushis.splice(0, 4)
      setSushis(allSushis)
      setFourSushis(four)
      console.log(allSushis.length)
    })
  }, [])

  const getSushi = () => {
    const allSushis = sushis
    const four = sushis.splice(0, 4)
    setSushis(allSushis)
    setFourSushis(four)
  }

  const eatSushi = (e) => {
    if (budget - parseInt(e.target.dataset.price) >= 0){
      const newSushis = fourSushis.map(s => s.id == e.target.id ?  {...s, eaten: true} : s)
      setFourSushis(newSushis)
      const newBudget = budget - parseInt(e.target.dataset.price)
      setBudget(newBudget)
    }
  }  

  return (
    <div className="app">
      <SushiContainer fourSushis={fourSushis} eatSushi={eatSushi} getSushi={getSushi} />
      <Table fourSushis={fourSushis} budget={budget} />
    </div>
  );
}

export default App;
