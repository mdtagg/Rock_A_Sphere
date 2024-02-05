import { useState,useEffect } from "react"
import { KindOfRockType,RockDataType } from "../../App/types/app"
import { TotalRainType } from "../../App/types/app"

const DaysToClimb = (props:{rockData:RockDataType,weatherData:any}) => {

    const [ daysToClimb, setDaysToClimb ] = useState('0')
    const { rockData,weatherData } = props
    const { name } = rockData!.primaryRockType as unknown as KindOfRockType
    const { pastThreeTotal,pastSevenTotal } = weatherData.dailyWeather.rainTotals

    function getDaysToClimb() {

        const kindsOfRock = rockData!.kindsOfRock.map(rock => rock.name)
        const sensitiveRockTypes = ['sandstone','basalt','mudstone','siltstone','breccia','andesite','conglomerate','siltstone','dolomite']
        let susceptible = false

        kindsOfRock.forEach(rock => {
            if(sensitiveRockTypes.includes(rock)) susceptible = true;
        })

        if(name === 'sedimentary' || susceptible) {

            if(pastThreeTotal >= 6 || pastSevenTotal >= 9) {
                setDaysToClimb('5-7')
            }
            else if((pastThreeTotal < 6 && pastThreeTotal >= 3) || (pastSevenTotal < 7 && pastSevenTotal >= 5)) {
                setDaysToClimb('4-5')
            }
            else if((pastThreeTotal < 3 && pastThreeTotal >= 1) || pastSevenTotal < 5 && pastSevenTotal >= 2.5) {
                setDaysToClimb('3-4')
            }else if((pastThreeTotal < 1 && pastThreeTotal >= 0.5) || (pastSevenTotal < 2.5 && pastSevenTotal >= 1.5)) {
                setDaysToClimb('2-3')
            }else if((pastThreeTotal < 0.5 && pastThreeTotal > 0) || (pastSevenTotal < 1.5 && pastSevenTotal >= 1)) {
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
    if(!weatherData || !rockData) return 
    getDaysToClimb()
},[weatherData,rockData])
    
    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl'>{daysToClimb}</p>
            <p className='text-[.7rem] leading-none font-bold sm:text-[.4rem]'>
                Always make sure the ground by your climb is dry,
                if it is not wait another day or two!
            </p>
        </div>
    )
}

export { DaysToClimb }