import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Feature } from 'ol/index.js';
import { Point } from 'ol/geom.js';
import { Map } from 'ol';
// import { v4 as uuidv4 } from 'uuid'


function addPoint(mapRef:React.MutableRefObject<Map>,id:string,point:Point) {
    // const feature = new Feature(point)
    // feature.setId(id)
    const newPoint = new VectorLayer({
            source: new VectorSource({
                features: [new Feature(point)]
            }),
            style: {
                'circle-radius': 7,
                'circle-fill-color': 'red',
            },
            // id: id,
            // type:'point',
        })
    newPoint.setProperties({'id':id,'type':'point'})
    console.log({newPoint})
    mapRef.current.getLayers().push(newPoint)
    
}

export { addPoint }