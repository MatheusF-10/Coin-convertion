import EtherumImage from '@/assets/etherum.png'
export const Etherum = (props) => {
  return(
    <div>
      <img src={EtherumImage} alt="Imagem do etherum" className='image-coin'/>
      <p>{props.info.brl}</p>
      <p>{props.info.eur}</p>
      <p>{props.info.usd}</p>
    </div>
  )
}