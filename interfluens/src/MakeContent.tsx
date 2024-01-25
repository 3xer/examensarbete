import { FC, useState } from "react"
//import { upgradeList } from "./Upgrades";
import { makeContentProps } from "./Types";
import { upgradeList } from "./fakeDB";




const MakeContent:FC<makeContentProps> = ({ upgrades }) => {
    console.log(upgrades)
    if (upgrades.length == 0){
        upgrades[0]= upgradeList[0].value;
        upgrades[1]= upgradeList[1].value;
    }
    const [count, setCount] = useState(0)
    const [isClickDisabled, setIsClickDisabled] = useState(false);
    const timer = upgrades[0]
    const max = upgrades[1]
    const handleClick = ()=> {
        setIsClickDisabled(true)
            setTimeout(() => {
            setIsClickDisabled(false)
            setCount(count + Math.floor(Math.random()* (0 - max) + max))
        },timer), clearTimeout(timer)
    
        
    }


    //update count in DB
    return(
        <>
        <h1 key={'123'}>
            {count}
        </h1>
        <button 
            key={'321'}
            onClick={handleClick}
            disabled={isClickDisabled}
        >
            Make content
        </button>
           
        </>


    )

}
export default MakeContent

