import { addPoint } from "./addPoint"
import { Point } from 'ol/geom.js';
import { Collection, Overlay } from "ol";
import { v4 as uuidv4 } from 'uuid'
import { Map } from "ol";
import { ReactSetter } from "../../App";
import { MapBrowserEvent } from "ol";
import { Coordinate } from "ol/coordinate";

function changeCoords(
    e: MapBrowserEvent<any>,
    mapRef: React.MutableRefObject<Map>,
    popupElement: React.MutableRefObject<HTMLFormElement>,
    setClickCoords: ReactSetter<Coordinate>,
    setAreaId: ReactSetter<string>,
    setCurrentFeature: ReactSetter<string>
    ) {
    
    const overlays = mapRef.current.getOverlays()
    if(overlays.getArray().length) return
    const feature = mapRef.current.getFeaturesAtPixel(e.pixel)[0] 
    if(feature) {
        //when a point on the map is clicked the location state is changed to that area
        const featureId = feature.getId() as string
        console.log(featureId)
        setCurrentFeature(featureId)
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

// type MapBrowserEvent = typeof MapBrowserEvent

// interface TChangeCoords {
//     e: SyntheticEvent<MapBrowserEvent>
//     mapRef: React.MutableRefObject<Map>
//     popupElement: React.MutableRefObject<HTMLFormElement>
//     setClickCoords: ReactSetter<TCoords>
//     setAreaId: ReactSetter<string>
//     setCurrentFeature: ReactSetter<string>
// }