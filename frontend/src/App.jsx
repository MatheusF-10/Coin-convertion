import { useState } from 'react'
import { About } from '@/components/body/about'
import { Conversor } from '@/components/body/conversor'
import { Contact } from '@/components/body/contact'
import { Subtitle } from '@/components/body/subtitle'
import { Title } from '@/components/body/title'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-body'>
      <Title />
      <Subtitle />
      <About />
      <Conversor />
      <Contact />
    </div>
  )
}

export default App
