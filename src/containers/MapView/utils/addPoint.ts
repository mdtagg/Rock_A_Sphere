import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Feature } from 'ol/index.js';
import { Point } from 'ol/geom.js';
import { Map } from 'ol';

function addPoint(mapRef:React.MutableRefObject<Map>,id:string,point:Point) {
    const newPoint = new VectorLayer({
            source: new VectorSource({
                features: [new Feature(point)]
            }),
            style: {
                'circle-radius': 7,
                'circle-fill-color': 'red',
            },
        })
    newPoint.setProperties({'id':id,'type':'point'})
    mapRef.current.getLayers().push(newPoint)
}

export { addPoint }