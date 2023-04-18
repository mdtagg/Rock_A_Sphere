import { fromLonLat } from 'ol/proj';
import { TCoords } from './changeCoords';
import { Coordinate } from 'ol/coordinate';

type numCoords = {
    latitude:number
    longitude:number
}

function transformCoordinates(coords:TCoords):Coordinate {

    const { longitude, latitude } = coords
    const place = [ longitude, latitude ].map(item => {
        return parseFloat(item)
    }) as Coordinate
    // console.log({place})
    
    return fromLonLat(place)
    
}

export { transformCoordinates }