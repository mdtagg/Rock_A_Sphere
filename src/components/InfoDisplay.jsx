import { useState,useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';

const InfoDisplay = (props) => {

    const [dailyData,setDailyData] = useState(undefined)

    function parseDailyData(dailyData) {
  
    let parsedData = []
        while(dailyData.rainTotal.length) {
            let dataSection = []
            dataSection.push(dailyData.days.shift())
            dataSection.push(dailyData.rainTotal.shift())       
            parsedData.push(dataSection)
        }
        parsedData.map(data => {
            if(data[1] === 0) {
                data.push('bg-green-200/70')
            }else if(data[1] > 0 && data[1] <= 0.5) {
                data.push('bg-yellow-200/70')
            }else {
                data.push('bg-red-400/70')
            }
            return data
        })
    setDailyData(parsedData)
    
    }

    useEffect(() => {
        if(!props.weatherData) return
        parseDailyData(props.weatherData.dailyWeather)
    },[props.weatherData])

    return (
        <section class='flex justify-evenly'>
            <div class='flex text-black w-full justify-between pl-10 pr-10 sm:grid sm:grid-cols-3 sm:grid-flow-row sm:p-0'>
            {dailyData &&
            dailyData.map(item => {
                return (
                    <div key={uuidv4()} class={`flex flex-col border-2 border-black p-6 ${item[2]} gap-3 sm:p-2 sm:items-center wide:p-1 wide:gap-0 wide:px-2`}>
                        <div class='text-3xl gap-3 wide:text-sm wide:font-bold'>{item[0]}</div>
                        <div class='flex gap-3 items-center wide:gap-2'>
                            <div>
                                <img class='h-5 w-5 wide:h-3 wide:w-3' src='rain.svg'></img>
                            </div>
                            <div class='text-xl font-bold wide:text-xs'>
                                {item[1]} <i>in</i>
                            </div>
                        </div>
                    </div>
                    )
                })
            } 
            </div>
            
        </section>
    )
    
}

export default InfoDisplay
