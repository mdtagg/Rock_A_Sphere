import Map from 'ol/Map'
import View from 'ol/View'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import {Feature} from 'ol/index.js';
import { Point } from 'ol/geom'
import { fromLonLat } from 'ol/proj'
import { Control } from 'ol/control'

function getInitialMap(mapElement,climbingAreas,mapChange,tileLayer,setTileLayer) {
    // const tileLayer = 
    // new TileLayer({
    //     source: new XYZ({
    //         url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    //         })
    //     })
    // const { mapElement } = mapInfo
    const initialMap = new Map({
        target: mapElement.current,
        layers: [
                // new TileLayer({
                // source: new XYZ({
                //     url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                //     })
                // }),
                tileLayer,
            
            ...climbingAreas.map(area => {
                const { longitude,latitude } = area.coords
                const { id } = area
                const place = [longitude,latitude]
                const webMerc = fromLonLat(place)
                const point = new Point(webMerc)
                
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
