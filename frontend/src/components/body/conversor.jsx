import { useState, useEffect } from "react"
import { Bitcoin } from "@/components/coins/bitcoin"
import { Bnb } from "@/components/coins/bnb"
import { Etherum } from "@/components/coins/etherum"
import { Tether } from "@/components/coins/tether"

export const Conversor = () => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    async function coinsList(){
      try {
        const coins = await fetch('http://127.0.0.1:5000/api/coins');
        const data = await coins.json();
        setCoin(data)
      } catch (e) {
        console.error(e);
      }
    }
    coinsList();
  }, []);

  return (
    <section className='container-conversor'>
      <div className="container-coins">
        <Bitcoin info={coin.bitcoin  ?? ''}/>
        <Bnb info={coin.binancecoin ?? ''}/>
        <Etherum info={coin.ethereum ?? ''}/>
        <Tether info={coin.tether ?? ''}/>  
      </div>
    </section>
  )
}