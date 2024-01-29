import { useState,useEffect } from "react"
import { TClimbingAreas,ReactSetter } from "../types/app"

const UseLocalStorage = (key: string, initialValue: TClimbingAreas): [TClimbingAreas,ReactSetter<TClimbingAreas>] => {
    const [ value, setValue ] = useState<TClimbingAreas>(() => {
        try {
            const localValue = window.localStorage.getItem(key)
            if(localValue && !JSON.parse(localValue).length) {
                return initialValue
            }
            return localValue ? JSON.parse(localValue) : initialValue
        }
        catch(error) {
            return initialValue
         }
    })

    useEffect(() => {
        window.localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

    return [ value, setValue ]
}


export default UseLocalStorage