import BitcoinImage from '@/assets/bitcoin.png'
export const Bitcoin = (props) => {
  return(
    <div>
      <img src={BitcoinImage} alt="Imagem do bitcoin" className='image-coin'/>
      <p>{props.info.brl}</p>
      <p>{props.info.eur}</p>
      <p>{props.info.usd}</p>
    </div>
  )
}