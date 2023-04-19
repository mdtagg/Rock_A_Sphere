import { RockDataType } from ".."


function getLithoCodes(rockData:Promise<any>) {
    console.log({rockData})
    let lithoCodes = []
    rockData.map(item => {
        
        lithoCodes.push(...item.liths)
    })
    return lithoCodes
}

export { getLithoCodes }