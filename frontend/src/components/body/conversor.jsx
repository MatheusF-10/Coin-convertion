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

  const array = Object.entries(coin).map(([key, value]) => {
    return {
      coin: key,
      brl: value.brl,
      eur: value.eur,
      usd: value.usd
    };
  });

  console.log(array);
  return (
    <section className='container-conversor'>
      <div className="container-coins">
        <div className="container-images">
          <Bitcoin />
          <Bnb />
          <Etherum />
          <Tether />
        </div>
        
          <ul className="container-info">
            {array.map((a) => (
              <li style={{"color": "white"}}>{a.coin}</li>
            ))}
          </ul>
          <ul className="container-info">
            {array.map((a) => (
              <li style={{"color": "white"}}>{a.brl}</li>
            ))}
          </ul>
          <ul className="container-info">
            {array.map((a) => (
              <li style={{"color": "white"}}>{a.eur}</li>
            ))}
          </ul>
          <ul className="container-info">
            {array.map((a) => (
              <li style={{"color": "white"}}>{a.usd}</li>
            ))}
          </ul>
        
      </div>
    </section>
  )
}