import { useContext } from "react"
import TableContext from "../contexts/TableContext"
import { LocationContext } from "../../App/contexts/FormContext"

const PrimaryRockType = () => {

    const { rockData } = useContext(TableContext)!
    const { location } = useContext(LocationContext)!
    const { latitude, longitude } = location.coords
   
    const { color } = getColor(rockData!.primaryRockType)
    
    
    function getColor(data:string) {
      
        const color = 
        data === 'sedimentary' ? '#FF8C00' :
        data === 'metamorphic' ? '#AC902A' :
        '#FF0000'

        return { color }
    }

    return (
        // <td className='flex flex-col border-r-2 border-b-2 border-black items-center justify-end w-1/5 p-1 h-full sm:p-0 '>
            <>
            <div className='h-full w-full flex justify-center items-center'>
                <button 
                    className='border-2 border-black rounded font-bold w-full text-center sm:text-xs sm:flex sm:justify-center sm:p-0  wide:text-xs' 
                    style={{backgroundColor: color}}
                >
                <a 
                    className='text-clip' 
                    href={`https://en.wikipedia.org/wiki/${rockData!.primaryRockType}`} 
                    target='_blank'
                >
                        {rockData!.primaryRockType}
                </a>
                </button>
            </div>
            <a 
                className='text-black text-[.2rem] absolute font-extrabold' 
                href={`https://macrostrat.org/map/loc/${longitude}/${latitude}#z=14`} 
                target='_blank'>
                    Geological data from MacroStrat
            </a>
            </>
        // </td>
    )
}

export { PrimaryRockType }