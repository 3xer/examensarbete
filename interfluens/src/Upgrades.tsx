import { FC, useState } from "react";
import { appliedUpgrades } from "./Types";
import { upgradeList} from "./fakeDB";
import { postUpgrade } from "./gamemanager";




const Upgrades:FC<appliedUpgrades> = ({ appliedUpgrades }) => {

    const upgradeValues:number[] = [];
    const [upgrades, setUpgrades] = useState(upgradeList[0].value)
    const [maxFollowerGain, setMaxFollowerGain] = useState(upgradeList[1].value)

    const  handleUpgrade = (id:number) => {
        //upgradeList[id] get item from array
        postUpgrade(id)
        
        
    }
            
            return (
            <>
                {upgradeList.map((item, index) => {

                        if (item.upgrade == 'genres'){
                            return (
                               
                            <div className={'big-container'} >
                                <p key={index}>Choose {item.upgrade}:</p>
                                <div className='genre-container' >
                                    {item.value.map((item:String, index:number) => {
                                        return(
                                           <button 
                                           key={index}
                                           className="genre-button"
                                           >{item} </button>
                                        )
                                    })}
                                </div>
                            </div>
                                
                                
                            )
                            }
                        else{
                            return(
                                <div className='container' >
                                    
                                    <button 
                                        key={1+index} 
                                        onClick={() => handleUpgrade(index)}
                                    >{item.upgrade} upgrade</button>
                                </div>
                                    
                                
                            )
                        }
                        
                    
                   
                })}
            </>
            )

}


export default Upgrades;
