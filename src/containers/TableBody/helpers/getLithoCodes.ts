import { RockServiceType } from "../../../services/RockDataService"

function getLithoCodes(rockData:RockServiceType[]) {
    let lithoCodes:any[] = []
    rockData.forEach(item => {
        lithoCodes.push(...item.liths)
    })
    return lithoCodes
}

export { getLithoCodes }