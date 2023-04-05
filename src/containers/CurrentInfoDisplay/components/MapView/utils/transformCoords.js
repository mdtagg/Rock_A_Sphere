import { fromLonLat } from 'ol/proj';

function transformCoords(coords) {

    const { longitude,latitude } = coords
    const place = [longitude,latitude].map(item => {
        return parseFloat(item)
    })
    
    return fromLonLat(place)
    
}

export { transformCoords }