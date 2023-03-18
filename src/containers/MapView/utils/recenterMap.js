
import { fromLonLat } from "ol/proj"

function recenterMap(mapRef,place) {
    const webMerc = fromLonLat(place)
    mapRef.current.getView().setCenter(webMerc)
    mapRef.current.getView().setZoom(16)
}

export { recenterMap }