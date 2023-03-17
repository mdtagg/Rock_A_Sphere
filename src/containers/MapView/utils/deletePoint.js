

function deletePoint(climbingAreas,mapRef) {

    const filteredIds = climbingAreas.map(area => {
        return area.id
    })

    console.log({filteredIds})
    console.log(mapRef.current.getLayers().getArray())
    const filteredLayers = mapRef.current.getLayers().getArray().filter(layer => {
        if(filteredIds.includes(layer.values_.id) || layer.values_.type !== 'point') {
            return layer
        }
    
    })
    return filteredLayers
}

export { deletePoint }