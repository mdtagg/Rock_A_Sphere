import TileLayer from 'ol/layer/Tile'
import XYZ from "ol/source/XYZ"

type TControls = {
    tileLayer: TileLayer<XYZ>
    mapChange: React.MutableRefObject<HTMLDivElement>
}

const MapChangeControls = (props:TControls) => {
    const { tileLayer,mapChange } = props

    function changeMapView(source:string) {
        tileLayer.setSource(
            new XYZ({
                    url:source
                })
            )
    }

    return (
        <div className='flex flex-col gap-2 justify-end' ref={mapChange} >
            <button 
                className='h-5 w-5 flex justify-center items-center bg-white border border-black cursor-pointer' 
                onClick={() => changeMapView('https://tile.openstreetmap.org/{z}/{x}/{y}.png')}
            >
                S
            </button>
            <button 
                className='h-5 w-5 flex justify-center items-center bg-white border border-black cursor-pointer' 
                onClick={() => changeMapView('https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')}
            >
                M
            </button>
        </div>
    )
}

export { MapChangeControls }