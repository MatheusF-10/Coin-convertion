export const Menu = () => {
  const items = [
    'Sobre',
    'Cotação',
    'Contato'
  ]

  return(
    <ul className='header-list'>
      {items.map((item) => 
        <li className='item-list'>{item}</li>
      )}
    </ul>
  )
}