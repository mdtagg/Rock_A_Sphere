
import { transform } from "ol/proj"

function setArea(feature,climbingRef,setLocation) {

    console.log({feature})
    const featureCoords = feature.getGeometry().flatCoordinates
    // console.log({featureCoords})
    const filteredArea = climbingRef.filter(area => {
        const {longitude,latitude} = area.coords
        const coords = transform([longitude,latitude],'EPSG:4326','EPSG:3857')
        // console.log({coords})
        if(coords[0] === featureCoords[0] && coords[1] === featureCoords[1]) {
            return area
        }
    })
    
    setLocation(...filteredArea)
}

export { setArea }