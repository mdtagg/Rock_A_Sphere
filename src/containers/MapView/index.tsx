
import { useState,useEffect,useRef,useContext } from 'react'
import { getInitialMap } from './utils/getInitialMap'
import { recenterMap } from './utils/recenterMap';
import { deletePoint } from './utils/deletePoint';
import { changeCoords } from './utils/changeCoords';
import { transformCoordinates } from './utils/transformCoordinates'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import CurrentInfoContext from '../App/contexts/CurrentInfoContext';
import EarthViewContext from '../CurrentInfoDisplay/contexts/EarthViewContext';
import { Map } from 'ol';
import { Coordinate } from 'ol/coordinate';
import { MapChangeControls } from './components/MapChangeControls';
import { MapForm } from './components/MapForm';

const MapView = () => {
    
    const { location, setLocation, climbingAreas } = useContext(CurrentInfoContext)!
    const { earthView, setEarthView } = useContext(EarthViewContext)!
    const [ map, setMap ] = useState<Map>(null!)
    const [ clickCoords, setClickCoords ] = useState<Coordinate>(null!)
    const [ areaId, setAreaId ] = useState('')
    const [ tileLayer, setTileLayer ] = useState(
        new TileLayer({
        source: new XYZ({
            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        })
    )
    const [ currentFeature, setCurrentFeature ] = useState<string>('')
    const mapElement = useRef<HTMLElement>(null!)
    const popupElement = useRef<HTMLFormElement>(null!)
    const popupContainer = useRef<HTMLDivElement>(null!)
    const mapChange = useRef<HTMLDivElement>(null!)
    const mapRef = useRef<Map>(null!)
    if(!mapRef.current) {
        mapRef.current = map
    }

    //creates the initial instance of the map 
    useEffect(() => {
        const initialMap = getInitialMap(mapElement,climbingAreas,mapChange,tileLayer)

        initialMap.on('click',(e) => { 
            const props = {e,mapRef,popupElement,setClickCoords,setAreaId,setCurrentFeature}
            changeCoords(props)
        })
        initialMap.on('pointermove', function (e) {
        if(mapRef.current) {
            const type = mapRef.current.hasFeatureAtPixel(e.pixel) ? 'pointer' : 'inherit';
            mapRef.current.getViewport().style.cursor = type;
        }
        });

        setMap(initialMap)
    },[])

    //when the location is changed the map is recentered to that locations coordinates
    useEffect(() => {

        if(!map) return
        const coordinates = transformCoordinates(location.coords)
        recenterMap(mapRef,coordinates)
        map.render()
        
    },[location])

    //deletes points on the map when area is deleted
    useEffect(() => {
        
        if(!map) return
        const filteredLayers = deletePoint(climbingAreas,mapRef)
        map.setLayers(filteredLayers)

    },[climbingAreas])

    //when the earth button is pressed the map is zoomed out
    useEffect(() => {
        if(!earthView) return
        setEarthView(false)
        if(mapRef.current) {
            mapRef.current.getView().setZoom(1)
        }
    },[earthView])

    //when a point on the map is clicked the location state is changed to that location
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
            <MapChangeControls
                tileLayer={tileLayer}
                mapChange={mapChange}
            />
            <div 
                className='hidden' 
                ref={popupContainer}
            >
            {map &&
                <MapForm
                    mapRef={mapRef}
                    popupElement={popupElement}
                    clickCoords={clickCoords}
                    areaId={areaId}
                    map={map}
                />
            }
            </div>
        </aside>
    )
}

export { MapView }

