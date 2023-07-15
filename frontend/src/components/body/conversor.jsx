import { Bitcoin } from "@/components/coins/bitcoin"
import { Bnb } from "@/components/coins/bnb"
import { Etherum } from "@/components/coins/etherum"
import { Tether } from "@/components/coins/tether"

export const Conversor = () => {
  return (
    <section className='container-conversor'>
      <div className="container-coins">
        <Bitcoin />
        <Bnb />
        <Etherum />
        <Tether />
      </div>
    </section>
  )
}