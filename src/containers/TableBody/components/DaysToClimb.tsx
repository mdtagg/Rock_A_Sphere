import { useState,useEffect,useContext } from "react"
import TableContext from "../contexts/TableContext"

const DaysToClimb = () => {

    const [ daysToClimb, setDaysToClimb ] = useState('0')
    const { rockData,totalRain } = useContext(TableContext)!

    function getDaysToClimb() {
        const kindsOfRock = rockData!.kindsOfRock.map(rock => {
            return rock.name
        })
        const sensitiveRockTypes = ['sandstone','basalt','mudstone','siltstone','breccia','andesite','conglomerate','siltstone','dolomite']
        let susceptible = false
        kindsOfRock.forEach(rock => {
            if(sensitiveRockTypes.includes(rock)) {
                susceptible = true
            }
        })
        
        const lastThree = totalRain!.pastThreeTotal
        const lastSeven = totalRain!.pastSevenTotal

        if(
            rockData!.primaryRockType === 'sedimentary' ||
            susceptible
        ) {
            if(lastThree >= 6 || lastSeven >= 9) {
                setDaysToClimb('5-7')
            }
            else if((lastThree < 6 && lastThree >= 3) || (lastSeven < 7 && lastSeven >= 5)) {
                setDaysToClimb('4-5')
            }
            if((lastThree < 3 && lastThree >= 1) || lastSeven < 5 && lastSeven >= 2.5) {
                setDaysToClimb('3-4')
            }else if((lastThree < 1 && lastThree >= 0.5) || (lastSeven < 2.5 && lastSeven >= 1.5)) {
                setDaysToClimb('2-3')
            }else if((lastThree < 0.5 && lastThree > 0) || (lastSeven < 1.5 && lastSeven >= 1)) {
                setDaysToClimb('1-2')
            }
            else {
                setDaysToClimb('0')
            }
        }else {
            setDaysToClimb('0')
        }

}

useEffect(() => {
    if(!totalRain || !rockData) return 
    getDaysToClimb()
},[totalRain,rockData])
    
    return (
        // <td className='flex flex-col justify-center items-center h-full w-1/5 border-r-2 border-b-2 border-black'>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl'>{daysToClimb}</p>
                <p className='text-[.7rem] leading-none font-bold sm:text-[.4rem]'>
                    Always make sure the ground by your climb is dry,
                    if it is not wait another day or two!
                </p>
            </div>
        // </td>
    )
}

export { DaysToClimb }