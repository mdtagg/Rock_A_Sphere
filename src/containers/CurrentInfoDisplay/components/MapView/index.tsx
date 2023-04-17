
import { useState,useEffect,useRef,useContext, SyntheticEvent } from 'react'
import { getInitialMap } from './utils/getInitialMap'
import { recenterMap } from './utils/recenterMap';
import { deletePoint } from './utils/deletePoint';
import { changeCoords } from './utils/changeCoords';
import { cancelPoint } from './utils/cancelPoint';
import { removeOverlays } from './utils/removeOverlays';
import { transform } from 'ol/proj';
import { transformCoords } from './utils/transformCoords';
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import CurrentInfoContext from '../../../App/contexts/CurrentInfoContext';
import EarthViewContext from '../../contexts/EarthViewContext';
import { Map } from 'ol';
import { TClimbingArea } from '../../../App';
// import { TClimbingAreas } from '../../../App/hooks/UseLocalStorage';


const MapView = () => {
    
    const { location, setLocation, climbingAreas, setClimbingAreas } = useContext(CurrentInfoContext)!
    const { earthView, setEarthView } = useContext(EarthViewContext)!
    const [ map, setMap ] = useState<Map | null>(null)
    const [ clickCoords, setClickCoords ] = useState([])
    const [ areaName, setAreaName ] = useState('')
    const [ areaId, setAreaId ] = useState('')
    const [ tileLayer, setTileLayer ] = useState(
        new TileLayer({
        source: new XYZ({
            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        })
    )
    const [ currentFeature, setCurrentFeature ] = useState()

    const mapElement = useRef<HTMLElement>(null!)
    const popupElement = useRef<HTMLFormElement>(null!)
    const popupContainer = useRef<HTMLDivElement>(null!)
    const mapChange = useRef<HTMLDivElement>(null!)
    const mapRef = useRef<Map | null>(null)
    if(mapRef.current) {
        mapRef.current = map
        
    }

    function handleSubmit(e:SyntheticEvent) {
        e.preventDefault()
        removeOverlays(mapRef)
        const transformedCoords = transform(clickCoords,'EPSG:3857','EPSG:4326')
        setClimbingAreas((prevAreas) => {
            return [
                ...prevAreas,
                {
                    title:areaName,
                    coords: {
                        latitude:transformedCoords[1].toString(),
                        longitude:transformedCoords[0].toString()
                    },
                    id: areaId
                }
            ]
        })
    }

    function handleInput(e:React.BaseSyntheticEvent) {
        const { value } = e.target
        setAreaName(value)
    }

    function deleteOverlay(e:React.BaseSyntheticEvent) {
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
    }

    //creates the initial instance of the map 
    useEffect(() => {
        const initialMap = getInitialMap(mapElement,climbingAreas,mapChange,tileLayer)
        initialMap.on('click',(e) => changeCoords(e,mapRef,popupElement,setClickCoords,setAreaId,setCurrentFeature,setLocation))
        initialMap.on('pointermove', function (e) {
            if(mapRef.current) {
                const type = mapRef.current.hasFeatureAtPixel(e.pixel) ? 'pointer' : 'inherit';
                mapRef.current.getViewport().style.cursor = type;
            }
          });
        setMap(initialMap)
    },[])

    useEffect(() => {

        if(!map) return
        const webMerc = transformCoords(location.coords)
        recenterMap(mapRef,webMerc)
        map.render()
        
    },[location])

    //deletes points on the map when area is deleted
    useEffect(() => {
        
        if(!map) return
        const filteredLayers = deletePoint(climbingAreas,mapRef)
        map.setLayers(filteredLayers)

    },[climbingAreas])

    useEffect(() => {
        if(!earthView) return
        setEarthView(false)
        if(mapRef.current) {
            mapRef.current.getView().setZoom(1)
        }
    },[earthView])

    useEffect(() => {
        if(!currentFeature) return
        const [ filteredArea ] = climbingAreas.filter(area => {
            if(area.id === currentFeature) {
                return area
            }
        }) 
        setLocation(filteredArea)
    },[currentFeature])

    return (
        <aside className='w-[900px] h-56 border-2 border-black rounded sm:w-1/2 sm:h-full wide:w-[29rem] wide:h-40' ref={mapElement}>
            <div className='flex flex-col gap-2 justify-end' ref={mapChange} >
                <button 
                    className='h-5 w-5 flex justify-center items-center bg-white border border-black cursor-pointer' 
                    onClick={changeStreetView}
                >
                    S
                </button>
                <button 
                    className='h-5 w-5 flex justify-center items-center bg-white border border-black cursor-pointer' 
                    onClick={changeMapView}
                >
                    M
                </button>
            </div>
            <div className='hidden' ref={popupContainer}>
            {map &&
            <form 
                className='h-14 w-32 flex flex-col justify-between relative bottom-[70px] right-[64px] bg-slate-300/75 border-2 border-black rounded text-xs'
                ref={popupElement}
            >
                <div className='h-1/2 flex flex-col'>
                    <label htmlFor='area-name'>Area Name: </label>
                    <input 
                        id='area-name' 
                        name='areaName'
                        onChange={(e) => handleInput(e)}
                    >
                    </input>
                </div>
                <div className='h-1/3 flex'>
                    <button className='flex justify-center items-center w-1/2 bg-green-500 hover:bg-green-700 text-white border border-black' onClick={(e) => handleSubmit(e)}>Add</button>
                    <button className='flex justify-center items-center h-full w-1/2 bg-red-600 hover:bg-red-800 text-white border border-black' onClick={deleteOverlay}>Cancel</button>
                </div>
            </form>}
            </div>
        </aside>
    )
}

export default MapView

