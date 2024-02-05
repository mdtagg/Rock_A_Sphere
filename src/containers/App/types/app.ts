import React from "react"

export type TCurrentWeather ={
    currentDate:string,
    currentTemp:number,
    weatherCode:number
}

export interface IWeatherData {
    currentWeather: TCurrentWeather
    dailyWeather: {
        days: string[],
        pastSevenRain: number[],
        pastThreeRain: number[]
    }
    forecast: {
        apparent_temperature_max: number[],
        precipitation_hours: number[],
        precipitation_probability_max: number[],
        precipitation_sum: number[],
        snowfall_sum:number[],
        sunrise: string[],
        sunset: string[],
        time: string[],
        weathercode: number[],
        windspeed_10m_max: number[]
    }
    hourlyWeather: {
        apparent_temperature_max: number[],
        precipitation_hours: number[],
        precipitation_probability_max: number[],
        precipitation_sum: number[],
        snowfall_sum:number[],
        time: string[],
        weathercode: number[],
        windspeed_10m_max: number[]
    }
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
    weatherData: IWeatherData | undefined
}

export interface TFormContext {
    climbingAreas:TClimbingAreas
    setClimbingAreas:ReactSetter<TClimbingAreas>
    setToggleForm:ReactSetter<boolean>
}

export type TRainReadout = {
    [key:number]: string | number
}[]

export interface TTableInfoContext {
    buttonTitle:string 
    setButtonTitle:ReactSetter<string>
    dailyData:TRainReadout[]
    setDailyData:ReactSetter<TRainReadout[]>
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
