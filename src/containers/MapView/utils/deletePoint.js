

function deletePoint(climbingAreas,mapRef,map) {

    const filteredIds = climbingAreas.map(area => {
        return area.id
    })
    const filteredLayers = mapRef.current.getLayers().getArray().filter(layer => {
    if(filteredIds.includes(layer.values_.id) || layer.values_.type !== 'point') {
        return layer
    }
    })
    return filteredLayers
}

export { deletePoint }