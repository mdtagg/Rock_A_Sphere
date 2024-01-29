import { TClimbingAreas } from "../../App/hooks/UseLocalStorage"
import { Map } from "ol"

function deletePoint(climbingAreas:TClimbingAreas,mapRef:React.MutableRefObject<Map>) {

    const filteredIds = climbingAreas.map(area => {
        return area.id
    })
    const filteredLayers = mapRef.current.getLayers().getArray().filter(layer => {
    const { id, type } = layer.getProperties()
    if(filteredIds.includes(id) || type !== 'point') {
        return layer
    }
    })
    return filteredLayers
}

export { deletePoint }