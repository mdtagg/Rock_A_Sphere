

function cancelPoint(mapRef,map) {
    let filteredLayers = mapRef.current.getLayers().getArray()
    filteredLayers = filteredLayers.slice(0,filteredLayers.length-1)
        map.setLayers(filteredLayers)
}

export { cancelPoint }

