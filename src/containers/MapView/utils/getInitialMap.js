import Map from 'ol/Map'
import View from 'ol/View'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import {Feature} from 'ol/index.js';
import { Point } from 'ol/geom'

function getInitialMap(mapInfo,climbingAreas) {

    const { place,mapElement,id } = mapInfo
    const initialMap = new Map({
        target: mapElement.current,
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}'
                }),
            }),
            ...climbingAreas.map(area => {
                const { longitude,latitude } = area.coords
                const place = [longitude,latitude]
                const point = new Point(place)
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
            projection:'EPSG:4326',
            center:place,
            zoom:16,
            maxZoom:16
        }),
        controls:[]
        })

    return initialMap
}

export { getInitialMap }