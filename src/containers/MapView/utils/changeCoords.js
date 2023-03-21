import { addPoint } from "./addPoint"
import {Point} from 'ol/geom.js';
import { Overlay } from "ol";
import { v4 as uuidv4 } from 'uuid'
import { setArea } from "./setArea";

function changeCoords(e,mapRef,popupElement,setClickCoords,setAreaId,climbingAreas,setLocation) {

    const overlays = mapRef.current.getOverlays().array_
    if(overlays.length) return
    const feature = mapRef.current.getFeaturesAtPixel(e.pixel)[0];
    if(feature) {
        //when a point on the map is clicked the location state is changed to that area
        setArea(feature,climbingAreas,setLocation)
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