import { fromLonLat } from 'ol/proj';
import { Coordinate } from 'ol/coordinate';

type numCoords = {
    latitude:string
    longitude:string
}

function transformCoordinates(coords:numCoords):Coordinate {

    const { longitude, latitude } = coords
    const place = [ longitude, latitude ].map(item => {
        return parseFloat(item)
    }) as Coordinate
    
    return fromLonLat(place)
    
}

export { transformCoordinates }