import { useContext } from "react"
import TableContext from "../contexts/TableContext"
import WeatherContext from "../../App/contexts/WeatherContext"

const PrimaryRockType = () => {

    const { rockData } = useContext(TableContext)
    const { location } = useContext(WeatherContext)
    const {latitude,longitude} = location.coords
    const { color } = getColor(rockData.primaryRockClass)
    
    function getColor(data) {
      
        const color = 
        data === 'sedimentary' ? '#FF8C00' :
        data === 'metamorphic' ? '#AC902A' :
        '#FF0000'

        return { color }
    }

    return (
        <td class='flex flex-col gap-1 border-r-2 border-black items-center justify-end w-1/5 p-1 h-full sm:p-0 '>
            <div class='h-full w-full flex justify-center items-center'>
                <button 
                    class='border-2 border-black rounded font-bold w-full text-center sm:text-xs sm:flex sm:justify-center sm:p-0  wide:text-xs' 
                    style={{backgroundColor: color}}
                >
                <a 
                    class='text-clip' 
                    href={`https://en.wikipedia.org/wiki/${rockData.primaryRockClass}`} 
                    target='_blank'
                >
                        {rockData.primaryRockClass}
                </a>
                </button>
            </div>
            <a 
                class='text-black text-[.2rem] absolute font-extrabold' 
                href={`https://macrostrat.org/map/loc/${longitude}/${latitude}#z=14`} 
                target='_blank'>
                    Geological data from MacroStrat
            </a>
        </td>
    )
}

export { PrimaryRockType }