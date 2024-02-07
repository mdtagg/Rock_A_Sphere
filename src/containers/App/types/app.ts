import React from "react"

export type TCurrentWeather ={
    currentDate:string,
    currentTemp:number,
    weatherCode:number
}

// export type TForecast = {
//     [key:string]:number[]
// }

export interface IHourly {
    apparent_temperature_max: number[],
    precipitation_hours: number[],
    precipitation_probability_max: number[],
    precipitation_sum: number[],
    snowfall_sum:number[],
    time: string[],
    weathercode: number[],
    windspeed_10m_max: number[],
    [key:string] : Array<number | string> 
}

type TDailyWeather = {
    pastSevenColor:string,
    pastSevenTotal:number,
    pastThreeColor:string,
    pastThreeTotal:number,
    rainReadoutVals:[string,number,string,string][]

}

export type TForecast = {
    [key:number]:[string,IHourly]
}

// export type 
// {
//         apparent_temperature_max: number[],
//         precipitation_hours: number[],
//         precipitation_probability_max: number[],
//         precipitation_sum: number[],
//         snowfall_sum:number[],
//         time: string[],
//         weathercode: number[],
//         windspeed_10m_max: number[]
//     }
 

export interface IWeatherData {
    currentWeather: TCurrentWeather
    dailyWeather: TDailyWeather
    forecast: TForecast
    hourlyWeather: TForecast
}


export interface test {
    currentWeather: {
        currentTemp: number;
        currentDate: string;
        weatherCode: number;
    }

    dailyWeather: {
        pastSevenTotal: number;
        pastSevenColor: string;
        pastThreeTotal: number;
        pastThreeColor: string;
        rainReadoutVals: [string, number, string, number][];
    }

    hourlyWeather:(string | {
        weathercode: number;
        precipitation: string | number;
        snow_fall: string | number;
        apparent_temperature: string | number;
        windspeed_10m: string | number;
        color: string;
    })[][]

    forecast:(string | {
        weathercode: number;
        apparent_temperature_max: number;
        sunrise: string | number;
        sunset: string | number;
        precipitation_sum: number;
        precipitation_hours: number;
        precipitation_probability_max: number;
        windspeed_10m_max: number;
        snowfall_sum: number;
        color: string;
    })[][]
}

export type TClimbingArea = {
    title: string,
    coords: { latitude: string, longitude: string },
    id: string
}

export type ReactSetter<T> = React.Dispatch<React.SetStateAction<T>>

export type TClimbingAreas = {
    title: string,
    coords: { latitude: string, longitude: string },
    id: string
}[]

export interface CurrentInfoContextType {
    location:TClimbingArea
    setLocation: ReactSetter<TClimbingArea>;
    weatherData: IWeatherData | undefined
    climbingAreas:TClimbingAreas
    setClimbingAreas: ReactSetter<TClimbingAreas>
}

export interface WeatherContextType {
    location: TClimbingArea
    weatherData: IWeatherData | undefined
    buttonTitle: string
    setButtonTitle: ReactSetter<string>
}

export interface TLocationContext {
    location: TClimbingArea
    setLocation: ReactSetter<TClimbingArea>;
    weatherData: test | undefined
}

export interface TFormContext {
    climbingAreas:TClimbingAreas
    setClimbingAreas:ReactSetter<TClimbingAreas>
    setToggleForm:ReactSetter<boolean>
}

export type TRainReadout = {
    [key:number]: string | number
}[]

export type TRainData = {
    buttonTitle:string,
    dailyData:[string,number,string,number][] | [] | IHourly[] 
}

export interface TTableInfoContext {
    rainData:TRainData
    setRainData:ReactSetter<TRainData>
}

export interface TableContextType {
    totalRain: TotalRainType | undefined;
    rockData: RockDataType | undefined;
}

export interface TotalRainType {
    pastSevenTotal:number
    pastSevenColor:string
    pastThreeTotal:number
    pastThreeColor:string
}

export type KindOfRockType = {
    name:string
    color:string
}

export interface RockDataType {
    primaryRockType:KindOfRockType[]
    kindsOfRock: KindOfRockType[]
}

export type TRockType = {
    class:string 
    color:string 
    fill:number 
    group:string 
    lith_id:number
    name:string 
    t_units:number
    type:string 
}

export type TZoomOut = {
    earthView:boolean
    setEarthView:ReactSetter<boolean>
}
