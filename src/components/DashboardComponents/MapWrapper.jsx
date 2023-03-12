
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
import {transform} from 'ol/proj'

const MapWrapper = (props) => {

    const [currentCoords,setCurrentCoords] = useState(() => {
        const lat = parseFloat(props.location.coords.latitude)
        const long = parseFloat(props.location.coords.longitude)
        return {lat,long}
    })
    console.log({currentCoords})
    const [map,setMap] = useState([])
    const mapRef = useRef()
    
    const place = [currentCoords.long, currentCoords.lat]
    const point = new Point(place)
    const webMercator = fromLonLat(place)

    // const transformedCoord = transform(place, 'EPSG:3857', 'EPSG:4326')
    // console.log({transformedCoord})

    console.log(webMercator)

    useEffect(() => {
        const initialMap = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}'
                    })
                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: [new Feature(point)]
                    }),
                    style: {
                        'circle-radius': 9,
                        'circle-fill-color': 'red',
                      },
                })
            ],
            view: new View({
                projection:'EPSG:4326',
                center:place,
                zoom:16
            }),
            controls:[]
        })

        setMap(initialMap)
    },[])

    return (
        <div class='w-72 h-40 border-2 border-black' ref={mapRef}></div>
    )
}

export default MapWrapper