import { useState,useEffect,useRef } from 'react'
import {Feature, Map, Overlay, View} from 'ol/index.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Point} from 'ol/geom.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {useGeographic} from 'ol/proj.js';
import XYZ from 'ol/source/XYZ'

const MapWrapper = () => {

    const [ map, setMap ] = useState()
    const [ featuresLayer, setFeaturesLayer ] = useState()
    const [ selectedCoord , setSelectedCoord ] = useState()

    const mapElement = useRef()

    useEffect( () => {

      useGeographic()
      const place = [-110, 45];

      const point = new Point(place);

      const map = new Map({
        target: mapElement.current,
        view: new View({
          center: place,
          zoom: 11,
        }),
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new VectorLayer({
            source: new VectorSource({
              features: [new Feature(point)],
            }),
            style: {
              'circle-radius': 9,
              'circle-fill-color': 'red',
            },
          }),
        ],
      });
    },[])
  
    return (
        <div ref={mapElement} class='h-32 w-32'>

        </div>
    )
}

export default MapWrapper