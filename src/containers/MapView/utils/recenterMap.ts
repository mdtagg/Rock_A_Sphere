import { Map } from "ol"
import { Coordinate } from "ol/coordinate"

function recenterMap(mapRef:React.MutableRefObject<Map>,coordinates:Coordinate) {
    mapRef.current.getView().setCenter(coordinates)
    mapRef.current.getView().setZoom(16)
}

export { recenterMap }