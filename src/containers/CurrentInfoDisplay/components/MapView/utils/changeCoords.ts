import { addPoint } from "./addPoint"
import {Point} from 'ol/geom.js';
import { Overlay } from "ol";
import { v4 as uuidv4 } from 'uuid'
import { Map } from "ol";
import { ReactSetter } from "../../../../App";

interface TChangeCoords {
    e:React.BaseSyntheticEvent
    mapRef: React.MutableRefObject<Map | null>
    popupElement: React.MutableRefObject<HTMLFormElement>
    setClickCoords: ReactSetter
}

function changeCoords(e,mapRef,popupElement,setClickCoords,setAreaId,setCurrentFeature) {

    const overlays = mapRef.current.getOverlays().array_
    if(overlays.length) return
    
    const feature = mapRef.current.getFeaturesAtPixel(e.pixel)[0];
    if(feature) {
        //when a point on the map is clicked the location state is changed to that area
        setCurrentFeature(feature.getGeometry().id)
        return
    }

    const coords = e.coordinate
    const point = new Point(coords)

    const id = uuidv4()
    point.id = id

    addPoint(mapRef,id,point)
    setAreaId(id)
   
    const popup = new Overlay({
        element: popupElement.current,
        stopEvent: false,
        position: coords
      });

    setClickCoords(coords)
    mapRef.current.addOverlay(popup);
}

export { changeCoords }