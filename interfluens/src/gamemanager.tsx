//communicates with backend to get upgrase modifyers 
export async function postUpgrade(id:number){
    const res = await fetch('localhost:3080/upgrade')
}