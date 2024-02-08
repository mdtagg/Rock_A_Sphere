import React from "react"

export interface ITableVals {
    total:string | number
    color:string
}

export type TDataLayerVal = {
    [key:string] : Array<string | number>
}

export interface IDataLayer {
    time:string
    vals:TDataLayerVal
    [key:string]:any
}

type parsedTableVals = {
    [key:string] : ITableVals
}

export interface IParsedWeather {
    currentWeather: {[key:string] : number | string};
    tableVals: parsedTableVals
    rainReadoutVals: rainReadoutVals
}

export interface IDaily {
    apparent_temperature_max:number[]
    precipitation_sum:number[]
    sunrise:string[]
    sunset:string[]
    time:string[]
    weathercode:number[]
    [key:string] : Array<number | string> 
}

export interface IHourly {
    apparent_temperature:number[]
    precipitation:number[]
    time:string[]
    weathercode:number[]
    snowfall:number[]
    windspeed_10m:number[]
    [key:string] : Array<number | string> 
}

export interface WeatherData {
    current_weather:{[key:string] : number | string},
    current_weather_units:{[key:string] : string},
    daily:IDaily,
    daily_units:{[key:string] : string},
    elevation:number,
    generationtime_ms:number,
    hourly:IHourly,
    hourly_units:{[key:string] : string},
    latitude:number,
    longitude:number,
    timezone:string,
    timezone_abbreviation:string,
    utc_offset_seconds:number
}

export type TClimbingArea = {
    title: string,
    coords: { latitude: string, longitude: string },
    id: string
}

export type ReactSetter<T> = React.Dispatch<React.SetStateAction<T>>

export interface CurrentInfoContextType {
    location:TClimbingArea
    setLocation: ReactSetter<TClimbingArea>;
    weatherData: IParsedWeather| undefined
    climbingAreas:TClimbingArea[]
    setClimbingAreas: ReactSetter<TClimbingArea[]>
}

export interface WeatherContextType {
    location: TClimbingArea
    weatherData: IParsedWeather| undefined
    buttonTitle: string
    setButtonTitle: ReactSetter<string>
}

export interface TForecast {
    
    apparent_temperature_max:number 
    color:string 
    precipitation_hours:number 
    precipitation_probability_max:number 
    precipitation_sum:number 
    snowfall_sum:number
    sunrise:string 
    sunset:string 
    time:string 
    weathercode:number
    windspeed_10m_max:number
    
}

export interface THourly {
    apparent_temperature:number 
    color:string 
    precipitation:number 
    rain:number 
    showers:number 
    snowfall:number 
    temperature_2m:number 
    time:string 
    weathercode:number
    windspeed_10m:number
}

export type TDailyDataVals = {
    [key:string] : any
}

interface dailyDataTest {
    time:string 
    vals:TDailyDataVals
}

export type TRainData = {
    buttonTitle:string,
    dailyData: dailyDataTest[] | []
}

type rainReadoutVals = {
    [key:string] : IDataLayer[]
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
