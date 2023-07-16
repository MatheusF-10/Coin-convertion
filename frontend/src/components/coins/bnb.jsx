import BnbImage from '@/assets/bnb.png'
export const Bnb = (props) => {
  return(
    <div>
      <img src={BnbImage} alt="Imagem do bnb" className='image-coin'/>
      <p>{props.info.brl}</p>
      <p>{props.info.eur}</p>
      <p>{props.info.usd}</p>
    </div>
  )
}