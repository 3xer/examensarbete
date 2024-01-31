//communicates with backend to get upgrase modifyers 
import {  upgradeModifiers } from "./fakeDB"

export async function postUpgrade(id:number){

    console.log(id)
    const res = await fetch('http://localhost:3080/upgrade', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body:  JSON.stringify({ id:  id })
    })
    const result = await res.json()
    console.log(result.array, 'result')
    
    console.log(upgradeModifiers, 'upgrade mod')
    upgradeModifiers[0] = result.array[0]
    upgradeModifiers[1] = result.array[1]
    return result;
    
} 

export function isUpgradeMaxed (id:number){
    if (upgradeModifiers[id] <= 0 ){
        upgradeModifiers[id] = 0;
    }

}