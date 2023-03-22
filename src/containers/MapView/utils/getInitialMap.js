import Map from 'ol/Map'
import View from 'ol/View'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import {Feature} from 'ol/index.js';
import { Point } from 'ol/geom'
import { Control } from 'ol/control'
import { transformCoords } from './transformCoords';

function getInitialMap(mapElement,climbingAreas,mapChange,tileLayer,setTileLayer) {

    const initialMap = new Map({
        target: mapElement.current,
        layers: [
                
            tileLayer,
            ...climbingAreas.map(area => {
               
                const webMerc = transformCoords(area.coords)
                const point = new Point(webMerc)
                const { id } = area
                point.id = id
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
        ],
        view: new View({
            projection:'EPSG:3857',
            center:[0,0],
            zoom:1,
            maxZoom:19
        }),
        controls:[new Control({
            element: mapChange.current,
            zoom:true
        })]
        })

    return initialMap
}

export { getInitialMap }
