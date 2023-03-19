import { addPoint } from "./addPoint"
import {Point} from 'ol/geom.js';
import { Overlay } from "ol";
import { v4 as uuidv4 } from 'uuid'

function changeCoords(e,mapRef,popupElement,setClickCoords,setAreaId) {

    const overlays = mapRef.current.getOverlays().array_
    if(overlays.length) return
    const featureTest = mapRef.current.getFeaturesAtPixel(e.pixel)[0];
    if(featureTest) {
        getAreaInfo()
        return
    }

    const coords = e.coordinate
    const point = new Point(coords)

    const id = uuidv4()
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