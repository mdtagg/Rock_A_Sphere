import { Map } from "ol"

function removeOverlays(mapRef:React.MutableRefObject<Map>) {
    console.log(mapRef.current.getOverlays().getArray())
    mapRef.current.getOverlays().clear()
    // mapRef.current.getOverlays().getArray().map(container => {
    //     container.element.remove()
    // })
    // mapRef.current.getOverlays().array_ = []
    
}

export { removeOverlays }