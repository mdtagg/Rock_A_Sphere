import { Map } from "ol"
import { Coordinate } from "ol/coordinate"
import { TCoords } from "./changeCoords"

function recenterMap(mapRef:React.MutableRefObject<Map>,coordinates:Coordinate) {
    // const { latitude,longitude } = coordinates
    // const numCoords = [latitude,longitude].map(item => {
    //     return parseFloat(item)
    // })
    mapRef.current.getView().setCenter(coordinates)
    mapRef.current.getView().setZoom(16)
}

export { recenterMap }