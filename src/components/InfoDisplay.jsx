import { useState,useEffect } from "react"

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
    console.log({parsedData})
    setDailyData(parsedData)
    }

    useEffect(() => {
        if(!props.weatherData || dailyData) return
        parseDailyData(props.weatherData.dailyWeather)
    },[props.weatherData])

    return (
        <section class='flex w-full justify-evenly mb-8'>
            <div class='flex text-black w-full justify-between pl-11 pr-11'>
            {dailyData &&
                dailyData.map(item => {
                    return (
                        <div class={`flex flex-col border-2 border-black p-6 ${item[2]} gap-3`}>
                            <div class='text-3xl gap-3'>{item[0]}</div>
                            <div class='flex gap-3 items-center'>
                                <div>
                                    <img class='h-5 ' src='/rain.svg'></img>
                                </div>
                                <div class='text-xl font-bold'>
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

// {props.weatherData &&
//     props.weatherData.dailyWeather.days.map(item => {
//         return (
//             <div>{item}</div>
//         )
//     })}


// {props.weatherData &&
//     props.weatherData.dailyWeather.forEach(item => {
//         return (
//             <div></div>
//         )
//     })
// }