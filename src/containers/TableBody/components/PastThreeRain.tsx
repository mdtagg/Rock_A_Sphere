// import { useContext } from "react"
// import TableContext from "../contexts/TableContext"

const PastThreeRain = () => {

    // const { totalRain } = useContext(TableContext)!

    return (
        // <td className={`flex flex-col items-center justify-center border-r-2 border-b-2 border-black text-xl ${totalRain!.pastThreeColor} font-bold w-1/5 h-full`}> 
        <p>
        {`${totalRain!.pastThreeTotal}"`}
        </p>
        // </td> 
    )
}

export { PastThreeRain }