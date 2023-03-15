import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import {Feature} from 'ol/index.js';

function addPoint(mapRef,id,point) {
    mapRef.current.addLayer(new VectorLayer({
        source: new VectorSource({
            features: [new Feature(point)]
        }),
        style: {
            'circle-radius': 7,
            'circle-fill-color': 'red',
        },
        id: id,
        type:'point'
    }))
}

export { addPoint }