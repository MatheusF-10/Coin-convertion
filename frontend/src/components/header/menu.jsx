export const Menu = () => {
  const items = [
    'Sobre',
    'Cotação',
    'Contato'
  ]

  return(
    <ul className='header-list'>
      {items.map((item, index) => 
        <li key={index} className='item-list'>{item}</li>
      )}
    </ul>
  )
}