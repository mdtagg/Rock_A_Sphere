
import { useState,useEffect,useRef } from 'react'
import {Point} from 'ol/geom.js';
import { getInitialMap } from './utils/getInitialMap'
import { recenterMap } from './utils/recenterMap';
import { deletePoint } from './utils/deletePoint';
import { changeCoords } from './utils/changeCoords';
import { cancelPoint } from './utils/cancelPoint';
import { removeOverlays } from './utils/removeOverlays';
import { transform } from 'ol/proj';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'

const MapView = (props) => {

    const longitude = parseFloat(props.location.coords.longitude)
    const latitude = parseFloat(props.location.coords.latitude)
    const place = [longitude, latitude]
    const webMerc = fromLonLat(place)
    
    const [map,setMap] = useState(null)
    const [clickCoords,setClickCoords] = useState([])
    const [areaName,setAreaName] = useState([])
    const [areaId,setAreaId] = useState([])
    const [tileLayer,setTileLayer] = useState(
        new TileLayer({
        source: new XYZ({
            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        }))

    const mapElement = useRef(null)
    const popupElement = useRef()
    const popupContainer = useRef()
    const mapChange = useRef()

    const mapRef = useRef()
    mapRef.current = map

    function handleSubmit(e) {
        e.preventDefault()
        removeOverlays(mapRef)
        const transformedCoords = transform(clickCoords,'EPSG:3857','EPSG:4326')
        props.setClimbingAreas((prevAreas) => {
            return [
                ...prevAreas,
                {
                    title:areaName,
                    coords: {
                        latitude:transformedCoords[1],
                        longitude:transformedCoords[0]
                    },
                    id: areaId
                }
            ]
        })
    }

    function handleInput(e) {
        const {value} = e.target
        setAreaName(value)
    }

    function deleteOverlay(e) {
        e.preventDefault()
        cancelPoint(mapRef,map)
        removeOverlays(mapRef) 
    }

    function changeStreetView() {

        tileLayer.setSource(
            new XYZ({
                    url:'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                })
            )
    }

    function changeMapView() {
        tileLayer.setSource(
            new XYZ({
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                })
            )
        // mapRef.current.getLayers().getArray().shift()
        // const newTile = new TileLayer({
        //         source: new XYZ({
        //             url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        //         })
        //         })
        // mapRef.current.getLayers().getArray().unshift(newTile)
        // map.render()
    }

    //creates the initial instance of the map 
    useEffect(() => {
        // const mapInfo = {place,point,mapElement,id}
        const initialMap = getInitialMap(mapElement,props.climbingAreas,mapChange,tileLayer)
        initialMap.on('click',(e) => changeCoords(e,mapRef,popupElement,setClickCoords,setAreaId,props.climbingAreas,props.setLocation))
        initialMap.on('pointermove', function (e) {
            const type = mapRef.current.hasFeatureAtPixel(e.pixel) ? 'pointer' : 'inherit';
            mapRef.current.getViewport().style.cursor = type;
          });
        setMap(initialMap)
    },[])

    useEffect(() => {

        if(!map) return
        recenterMap(mapRef,webMerc)
        map.render()
        
    },[props.location])

    //deletes points on the map when area is deleted
    useEffect(() => {
        
        if(!map ) return
        const { climbingAreas } = props
        const filteredLayers = deletePoint(climbingAreas,mapRef)
        map.setLayers(filteredLayers)

    },[props.climbingAreas])

    useEffect(() => {
        if(!props.earthView) return
        props.setEarthView(false)
        mapRef.current.getView().setZoom(1)
    },[props.earthView])

    return (
        <aside class='w-96 h-52 border-2 border-black rounded sm:w-1/2 sm:h-full wide:w-[29rem] wide:h-40' ref={mapElement}>
            <div class='flex flex-col gap-2 justify-end' ref={mapChange} >
                <button 
                    class='h-5 w-5 flex justify-center items-center bg-white border border-black cursor-pointer' 
                    onClick={changeStreetView}
                >
                    S
                </button>
                <button 
                    class='h-5 w-5 flex justify-center items-center bg-white border border-black cursor-pointer' 
                    onClick={changeMapView}
                >
                    M
                </button>
            </div>
            <div class='hidden' ref={popupContainer}>
            {map &&
            <form 
                class='h-14 w-32 flex flex-col justify-between relative bottom-[70px] right-[64px] bg-slate-300/75 border-2 border-black rounded text-xs'
                ref={popupElement}
            >
                <div class='h-1/2 flex flex-col'>
                    <label htmlFor='area-name'>Area Name: </label>
                    <input 
                        id='area-name' 
                        name='areaName'
                        onChange={(e) => handleInput(e)}
                    ></input>
                </div>
                <div class='h-1/3 flex'>
                    <button class='flex justify-center items-center w-1/2 bg-green-500 hover:bg-green-700 text-white border border-black' onClick={(e) => handleSubmit(e)}>Add</button>
                    <button class='flex justify-center items-center h-full w-1/2 bg-red-600 hover:bg-red-800 text-white border border-black' onClick={deleteOverlay}>Cancel</button>
                </div>
            </form>}
            </div>
        </aside>
    )
}

export default MapView

