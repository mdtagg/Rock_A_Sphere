import { Map } from "ol"

function cancelPoint(mapRef:React.MutableRefObject<Map>,map:Map) {
    let filteredLayers = mapRef.current.getLayers().getArray()
    filteredLayers = filteredLayers.slice(0,filteredLayers.length-1)
        map.setLayers(filteredLayers)
}

export { cancelPoint }

