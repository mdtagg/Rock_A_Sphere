import Map from 'ol/Map'
import View from 'ol/View'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import {Feature} from 'ol/index.js';
import { Point } from 'ol/geom'
import { Control } from 'ol/control'
import { transformCoords } from './transformCoords';
import { TClimbingAreas } from '../../../../App/hooks/UseLocalStorage';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
// import { changeCoords } from './changeCoords';

function getInitialMap(
    mapElement:React.MutableRefObject<HTMLElement>,
    climbingAreas:TClimbingAreas,
    mapChange:React.MutableRefObject<HTMLDivElement>,
    tileLayer:TileLayer<XYZ>,
    ): Map {

    const initialMap = new Map({
        target: mapElement.current,
        layers: [
                
            tileLayer,
            ...climbingAreas.map(area => {
               
                const webMerc = transformCoords(area.coords)
                const point:{[k:string]:any} = new Point(webMerc)
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
            // zoom:true
        })]
        })
    return initialMap
}

export { getInitialMap }

// mapRef:any,
//     popupElement:any,
//     setClickCoords:any,
//     setAreaId:any,
//     setCurrentFeature:any
