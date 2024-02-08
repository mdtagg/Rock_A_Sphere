import { IHourly,IDaily, IDataLayer, TDataLayerVal } from "../types/app"

function getRainBgColor(data:number) {
    return data == 0 ? 'bg-green-200/70' : 
    data > 0 && data <= 0.5 ? 'bg-yellow-200/70' : 
    'bg-red-400/70'
}

function populateData(data:TDataLayerVal,i:number) {
   
    let newObj = {} as IDataLayer
    
    let colorData = data.precipitation_sum ? data.precipitation_sum[i] : data.precipitation[i] 
    let keys = Object.keys(data)

    for(let key of keys) {
        newObj[key] = data[key][i] 
    }
    newObj["color"] = getRainBgColor(colorData as number)
    console.log({newObj,data})
    return newObj
}

function dateToData(data:TDataLayerVal,start:number,end:number) {
    let newData = []
    for(let i = start;i < end;i++) {
        let dataLayer = {} as IDataLayer
        dataLayer["time"] = data.time[i] as string
        dataLayer["vals"] = populateData(data,i) as TDataLayerVal
        newData.push(dataLayer)
    }
    return newData
}

export const getRainReadoutVals = (daily:IDaily,hourly:IHourly) => {
   
    const currentHour = new Intl.DateTimeFormat(undefined,{hour:'numeric'}).format(new Date())

    const wetRockVals = dateToData(daily,0,7)
    wetRockVals[0].time = "Today"

    const forecastVals = dateToData(daily,7,14)
    forecastVals[forecastVals.length - 1].time = "Today"

    const hourlyVals = dateToData(hourly,0,168)

    while(hourlyVals[0].time !== currentHour) hourlyVals.shift();

    return { wetRockVals,forecastVals,hourlyVals }

}
