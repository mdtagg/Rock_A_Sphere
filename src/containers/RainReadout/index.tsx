import { useState,useContext } from "react"
import { WeatherSquare } from "../WeatherSquare";
import { v4 as uuidv4 } from 'uuid';
import { TableInfoContext } from "../App/contexts/FormContext";
import { TRainReadout } from "../App/types/app";

const RainReadout = () => {

    const { dailyData, rainData } = useContext(TableInfoContext)!

    function findToday(data:TRainReadout,index:number,buttonTitle:string) {
       
        if(
            (index === 6 && buttonTitle === 'Wet Rock') ||
            (index === 0 && buttonTitle === 'Forecast')
            ) {
                data[0] = 'Today'
        }
    }

    return (
        <section 
            className='grid grid-cols-7 pr-11 h-full gap-10 text-black ml-11 sm:grid-cols-3 sm:grid-flow-row sm:p-0 sm:m-0 sm:gap-0 wide:gap-0 wide:p-0'
        >
        {
        rainData.dailyData.map((data,index) => {
            
            findToday(data,index,rainData.title)

            return (
                <WeatherSquare
                    data={data}
                    key={uuidv4()}
                    buttonTitle={rainData.buttonTitle}
                />
                )
            })
        } 
        </section>
    )
}

export { RainReadout }
