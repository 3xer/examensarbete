import { FC, useState } from "react";
import { appliedUpgrades } from "./Types";
import { upgradeList } from "./fakeDB";


const Upgrades:FC<appliedUpgrades> = ({ appliedUpgrades }) => {

    const upgradeValues:number[] = [];
    const [clickDelay, setClickDelay] = useState(upgradeList[0].value)
    const [maxFollowerGain, setMaxFollowerGain] = useState(upgradeList[1].value)
    const handleUpgrade = (id:number) => {
        upgradeList.forEach((item, index)=> {
            if(index === id){
                if(item.upgrade ==='clickDelay'){
                    //removes time from the dealy
                    upgradeValues[index] = (clickDelay - item.upgradeValue)
                    setClickDelay(clickDelay - item.upgradeValue)
                    console.log(upgradeValues[index])
                    appliedUpgrades(upgradeValues)

                }else if (item.upgrade === 'maxFollowerGain') {
                    upgradeValues[index] = (maxFollowerGain + item.upgradeValue)
                    setMaxFollowerGain(maxFollowerGain)
                    console.log(upgradeValues[index])
                    appliedUpgrades(upgradeValues)
                } 
            }
            
        });
        
    }
            
            return (
            <>
                {upgradeList.map((item, index) => {
                    return (
                        <>
                            <p key={index}>{item.upgrade}</p>
                            <button 
                                key={1+index} 
                                onClick={() => handleUpgrade(index)}
                            >upgrade</button>
                        </>
                    )
                   
                })}
            </>
            )
        
        
    

}


export default Upgrades;
