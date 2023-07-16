import TetherImage from '@/assets/tether.png'
export const Tether = (props) => {
  return(
    <div>
      <img src={TetherImage} alt="Imagem do tether" className='image-coin'/>
      <p>{props.info.brl}</p>
      <p>{props.info.eur}</p>
      <p>{props.info.usd}</p>
    </div>
  )
}