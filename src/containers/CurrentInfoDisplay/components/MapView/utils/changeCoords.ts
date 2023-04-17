import { addPoint } from "./addPoint"
import { Point } from 'ol/geom.js';
import { Collection, Overlay } from "ol";
import { v4 as uuidv4 } from 'uuid'
import { Map } from "ol";
import { ReactSetter } from "../../../../App";
import { SyntheticEvent } from "react";
import { MapBrowserEvent } from "ol";


export type TCoords = [ latitude: number, longitude: number]



// type MapBrowserEvent = typeof MapBrowserEvent

// interface TChangeCoords {
//     e: SyntheticEvent<MapBrowserEvent>
//     mapRef: React.MutableRefObject<Map>
//     popupElement: React.MutableRefObject<HTMLFormElement>
//     setClickCoords: ReactSetter<TCoords>
//     setAreaId: ReactSetter<string>
//     setCurrentFeature: ReactSetter<string>
// }

function changeCoords(
    e: MapBrowserEvent<any>,
    mapRef: any,
    popupElement: React.MutableRefObject<HTMLFormElement>,
    setClickCoords: ReactSetter<TCoords>,
    setAreaId: ReactSetter<string>,
    setCurrentFeature: ReactSetter<string>) {
    // const { e,mapRef,popupElement,setClickCoords,setAreaId,setCurrentFeature } = props
    console.log(mapRef.current)
    const overlays = mapRef.current.getOverlays().array_
    console.log({overlays})
    // .array_
    if(overlays) return
    // .length
    
    const feature = mapRef.current.getFeaturesAtPixel(e.pixel)[0];
    if(feature) {
        //when a point on the map is clicked the location state is changed to that area
        setCurrentFeature(feature.getGeometry().id)
        return
    }

    const coords:any = e.coordinate
    const point = new Point(coords)

    const id = uuidv4()
    // point.id = id


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