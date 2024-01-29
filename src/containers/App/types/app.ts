

export interface IWeatherData {
    currentWeather: {
        currentDate:string,
        currentTemp:number,
        weatherCode:number
    }
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