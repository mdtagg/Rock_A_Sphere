import TableContext from "../contexts/TableContext"
import { useContext } from "react"

const PastSevenRain = () => {

    const { totalRain } = useContext(TableContext)!

    return (
        <td className={`flex flex-col justify-end items-center border-r-2 border-black w-1/5 h-full`}>
            <p className={`text-xl flex items-center h-full font-bold ${totalRain!.pastSevenColor}`}>
                {`${totalRain!.pastSevenTotal}"`}
            </p>
            <a 
                className='text-black absolute text-[.2rem] font-extrabold' 
                href='https://open-meteo.com/' 
                target='_blank'
            >
                Weather data from Open-Medio
            </a>
        </td>
    )
}

export { PastSevenRain }