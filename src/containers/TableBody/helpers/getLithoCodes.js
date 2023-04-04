
function getLithoCodes(rockData) {
    let lithoCodes = []
    rockData.success.data.forEach(item => {
        lithoCodes.push(...item.liths)
    })
    return lithoCodes
}

export { getLithoCodes }