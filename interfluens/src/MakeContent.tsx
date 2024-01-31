import { FC, useEffect, useState } from "react"
//import { upgradeList } from "./Upgrades";

import { upgradeModifiers } from "./fakeDB";




const MakeContent:FC = () => {
    
    //update count in DB
   
    const [count, setCount] = useState(0);
    const [isClickDisabled, setIsClickDisabled] = useState(false);
    const [timer, setTimer] = useState(1000);
    const [max, setMax] = useState(2);
    

   
//send a intitialization to the backend and fix multi render problem maybe move init to makeContent component     
    const handleClick = ()=> {
        setTimer(upgradeModifiers[0])
        setMax(upgradeModifiers[1])
        setIsClickDisabled(true)
           setTimeout(() => {
           setIsClickDisabled(false)
           setCount(count + Math.floor(Math.random()* (0 - max) + max))
       },timer), clearTimeout(timer)
   }
    return (
        <>
        <h1 key={'123'}>
            {count}
        </h1>
        <button 
            id="content-button"
            key={'321'}
            onClick={handleClick}
            disabled={isClickDisabled}
        >
            Make content
        </button>
           
        </>
    )
}

export default MakeContent;

