

function deletePoint(climbingAreas,mapRef,map) {

    const filteredIds = climbingAreas.map(area => {
        return area.id
    })
    console.log(filteredIds)

    const filteredLayers = mapRef.current.getLayers().getArray().filter(layer => {
    if(filteredIds.includes(layer.values_.id) || layer.values_.type !== 'point') {
        return layer
    }
        
    })
    return filteredLayers
    console.log({filteredLayers})
    //Issue is that this function is filtering out the new 
    //point that gets made. deleted area id and point id do
    //not match
}

export { deletePoint }