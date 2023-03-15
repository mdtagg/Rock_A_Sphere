

function deletePoint(climbingAreas,map) {
    const filteredIds = climbingAreas.map(area => {
        return area.id
    })
    const filteredLayers = map.getLayers().getArray().filter(layer => {
        if(filteredIds.includes(layer.values_.id) || layer.values_.type !== 'point') {
            return layer
        }
    return filteredLayers
    })
}

export { deletePoint }