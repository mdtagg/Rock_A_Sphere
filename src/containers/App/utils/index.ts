
export function parseDate(data:number[],options:Intl.DateTimeFormatOptions) {
    return data.map(date => Intl.DateTimeFormat(undefined,options).format(date * 1000))
}

// function populateData(data,i) {
//     let newObj = new Map()
//     for(let key of Object.keys(data)) {
//         if(key === "sunrise" || key === "sunset") {
//             const hour = parseDate(data[key][i],{hour:'numeric'})
//             newObj.set(key,hour);
//         }
//         else newObj.set(key,data[key][i]);
//     }
//     return newObj
// }

// export function dateToData(data) {
//     let newData = new Map()
//     let keys = Object.keys(data)
//     for(let i = 0;i < keys.length;i++) {
//         const date = parseDate(data.time[i],{weekday:"short",day:"numeric"})
//         newData.set(date,populateData(data,i))
//     }
//     return newData
// }