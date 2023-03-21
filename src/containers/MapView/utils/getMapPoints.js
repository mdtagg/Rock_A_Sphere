import { transformCoords } from "./transformCoords"
import { Point } from "ol/geom"
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import {Feature} from 'ol/index.js';

function getMapPoints(climbingAreas) {

    const mapPoints = climbingAreas.map(area => {
        const webMerc = transformCoords(area.coords)
        const point = new Point(webMerc)
        const { id } = area
        return (
            new VectorLayer({
                source: new VectorSource({
                    features: [new Feature(point)]
                }),
                style: {
                    'circle-radius': 7,
                    'circle-fill-color': 'red',
                },
                id: id,
                type: 'point'
            })
        )
    })
    return mapPoints
}

export { getMapPoints }