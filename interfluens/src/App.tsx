import { useState } from 'react'

//import './App.css'
import MakeContent from './MakeContent'
import Upgrades from './Upgrades'

function App() {
  const [upgrades, setUpgrades] = useState<number[]>([]);

  const handleArrayUpdate = (updatedArray: number[]) =>{
      setUpgrades(updatedArray)
  }


  return (
    <>
    <div key={'100'} className="">
        <MakeContent upgrades={upgrades} />
        <Upgrades appliedUpgrades={handleArrayUpdate} />
    </div>

    </>
  )
} 


export default App
