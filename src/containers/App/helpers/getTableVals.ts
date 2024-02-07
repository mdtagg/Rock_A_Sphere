    
function getRainTextColor(amtRain:number,upperLimit:number) {
    return (
        amtRain == 0 ? 'text-green-500' :
        amtRain < upperLimit ? 'text-yellow-500' : 
        'text-red-600'
    )
}

export const getTableVals = (data) => { 

    const pastSevenVals = {total:0,color:""}
    const pastThreeVals = {total:0,color:""}

    data.forEach((value,idx) => {
        pastSevenVals.total += value
        if(idx > 4) pastThreeVals.total += value
    })

    pastSevenVals.total = parseFloat(pastSevenVals.total).toFixed(2) 
    pastThreeVals.total = parseFloat(pastThreeVals.total).toFixed(2)
    pastSevenVals.color = getRainTextColor(pastSevenVals.total,2)
    pastThreeVals.color = getRainTextColor(pastThreeVals.total,1)

    return {pastSevenVals,pastThreeVals}
    
}

/*
[{pastSevenTotal,pastThreeTotal,pastSevenColor,pastThreeColor}]
*/