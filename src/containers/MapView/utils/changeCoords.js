import { addPoint } from "./addPoint"
import {Point} from 'ol/geom.js';
import { Overlay } from "ol";
import { v4 as uuidv4 } from 'uuid'

function changeCoords(e,mapRef,popupElement,setClickCoords) {

    
    const overlays = mapRef.current.getOverlays().array_
    if(overlays.length) return
    const featureTest = mapRef.current.getFeaturesAtPixel(e.pixel)[0];
    if(featureTest) {
        getAreaInfo()
        return
    }

    const coords = e.coordinate
    console.log({coords})
    const point = new Point(coords)
    addPoint(mapRef,uuidv4(),point)

    const popup = new Overlay({
        element: popupElement.current,
        stopEvent: false,
        position: coords
      });

    setClickCoords(coords)
    mapRef.current.addOverlay(popup);
    
}

export { changeCoords }