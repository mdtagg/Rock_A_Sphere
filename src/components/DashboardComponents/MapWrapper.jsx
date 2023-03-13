
import { useState,useEffect,useRef } from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import XYZ from 'ol/source/XYZ'
import {Point} from 'ol/geom.js';
import {Feature} from 'ol/index.js';
import {fromLonLat} from 'ol/proj.js';
import {transform} from 'ol/proj';
import { Group as LayerGroup } from 'ol/layer.js'

const MapWrapper = (props) => {

    const [map,setMap] = useState(null)
    const mapElement = useRef(null)

    const mapRef = useRef()
    mapRef.current = map

    useEffect(() => {
        const place = [props.location.coords.longitude, props.location.coords.latitude]
        const point = new Point(place)
        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}'
                    }),
                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: [new Feature(point)]
                    }),
                    style: {
                        'circle-radius': 7,
                        'circle-fill-color': 'red',
                    },
                    id: props.location.id,
                    type: 'point'
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
        setMap(initialMap)
    },[])

    useEffect(() => {
        if(!map) return
        
        const lat = parseFloat(props.location.coords.latitude)
        const long = parseFloat(props.location.coords.longitude)
        const point = new Point([long,lat])
        mapRef.current.getView().setCenter([long,lat])
        mapRef.current.addLayer(new VectorLayer({
            source: new VectorSource({
                features: [new Feature(point)]
            }),
            style: {
                'circle-radius': 7,
                'circle-fill-color': 'red',
            },
            id: props.location.id,
            type:'point'
        }))
        map.renderSync()
        
    },[props.location])

    useEffect(() => {
        if(!map) return

        const filteredIds = props.climbingAreas.map(area => {
            return area.id
        })
        const filteredLayers = map.getLayers().getArray().filter(layer => {
            if(filteredIds.includes(layer.values_.id) || layer.values_.type !== 'point') {
                return layer
            }
        })
        map.setLayers(filteredLayers)
        // console.log(filteredIds)
        console.log(filteredLayers)
    },[props.climbingAreas])

    return (
        <div class='w-72 h-40 border-2 border-black rounded sm:w-1/2 sm:h-full' ref={mapElement}></div>
    )
}

export default MapWrapper