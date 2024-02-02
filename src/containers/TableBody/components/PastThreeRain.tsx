import { useContext } from "react"
import TableContext from "../contexts/TableContext"

const PastThreeRain = () => {

    const { totalRain } = useContext(TableContext)!

    return (
        <td className={`flex flex-col items-center justify-center text-xl ${totalRain!.pastThreeColor} font-bold border-r-2 border-black w-1/5 h-full gap-1`}> 
            {`${totalRain!.pastThreeTotal}"`}
        </td> 
    )
}

export { PastThreeRain }