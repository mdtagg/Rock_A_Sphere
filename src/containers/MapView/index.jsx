
import { useState,useEffect,useRef } from 'react'
import {Point} from 'ol/geom.js';
import { getInitialMap } from './utils/getInitialMap'
import { addPoint } from './utils/addPoint';
import { recenterMap } from './utils/recenterMap';
import { deletePoint } from './utils/deletePoint';

const MapView = (props) => {

    const longitude = parseFloat(props.location.coords.longitude)
    const latitude = parseFloat(props.location.coords.latitude)
    const id = props.location.id
    const place = [longitude, latitude]
    const point = new Point(place)
    
    const [map,setMap] = useState(null)
    const mapElement = useRef(null)

    const mapRef = useRef()
    mapRef.current = map

    //creates the initial instance of the map 
    useEffect(() => {
        const mapInfo = {place,point,mapElement,id}
        const initialMap = getInitialMap(mapInfo)
        setMap(initialMap)
    },[])

    //adds a red dot on the map when a new area is created
    useEffect(() => {
        if(!map) return
    
        recenterMap(mapRef,place)
        addPoint(mapRef,id,point)
        
        map.renderSync()
        
    },[props.location])

    //deletes points on the map when area is deleted
    useEffect(() => {
        
        if(!map ) return
        const { climbingAreas } = props
        const filteredLayers = deletePoint(climbingAreas,map)
        map.setLayers(filteredLayers)
    },[props.climbingAreas])

    return (
        <aside class='w-72 h-full flex border-2 border-black rounded sm:w-1/2 sm:h-full' ref={mapElement}></aside>
    )
}

export default MapView

