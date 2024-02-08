import { ITableVals } from "../types/app"


function getRainTextColor(amtRain:number,upperLimit:number) {
    return (
        amtRain == 0 ? 'text-green-500' :
        amtRain < upperLimit ? 'text-yellow-500' : 
        'text-red-600'
    )
}

export const getTableVals = (data:number[]) => { 

    const pastSevenVals:ITableVals = {total:0,color:""}
    const pastThreeVals:ITableVals = {total:0,color:""}

    data.forEach((value,idx) => {
        pastSevenVals.total = pastSevenVals.total as number + value 
        if(idx > 4) pastThreeVals.total = pastThreeVals.total as number + value
    })

    pastSevenVals.color = getRainTextColor(pastSevenVals.total as number,2)
    pastThreeVals.color = getRainTextColor(pastThreeVals.total as number,1)
    pastSevenVals.total = parseFloat(pastSevenVals.total as string).toFixed(2) 
    pastThreeVals.total = parseFloat(pastThreeVals.total as string).toFixed(2)
    

    return {pastSevenVals,pastThreeVals}
    
}