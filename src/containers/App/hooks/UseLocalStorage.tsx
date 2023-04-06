import { useState,useEffect } from "react"

const UseLocalStorage = (key:string,initialValue:any) => {

    const [ value, setValue ] = useState(() => {
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
    return [value,setValue]
}


export default UseLocalStorage