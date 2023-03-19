import { transform } from "ol/proj"

function filterAreas(climbingAreas) {
    const filteredArea = climbingAreas.filter(area => {
        const {longitude,latitude} = area.coords
        const coords = transform([longitude,latitude],'EPSG:4326','EPSG:3857')
        console.log(coords)
        
        
       
    })
}

export { filterAreas }