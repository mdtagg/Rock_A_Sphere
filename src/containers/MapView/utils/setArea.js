
import { transform } from "ol/proj"

function setArea(feature,climbingAreas,setLocation) {
 
    const featureCoords = feature.getGeometry().flatCoordinates
    console.log({climbingAreas})
    console.log({featureCoords})
    const filteredArea = climbingAreas.filter(area => {
        const {longitude,latitude} = area.coords
        const coords = transform([longitude,latitude],'EPSG:4326','EPSG:3857')
        // console.log(coords)
        if(coords[0] === featureCoords[0] && coords[1] === featureCoords[1]) {
            return area
        }
    
    })
    // console.log({filteredArea})
    setLocation(...filteredArea)
}

export { setArea }