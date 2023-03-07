import axios from "axios"
import { useState,useEffect } from "react"

const Summary = (props) => {

    const [rockTypes,setRockTypes] = useState([])
    const [rockData,setRockData] = useState(
        {
        primaryRockClass:'sedimentary',
        primaryRockType:'siliciclastic',
        kindsOfRock: 
        [
            {
                name:'sandstone',
                color:'#FFD500'
            },
            {
                name:'sedimentary',
                color:'#FF8C00'
            }
        ]
    }
    )

    async function getRockData() {
        const lat = props.location.coords.latitude
        const lng = props.location.coords.longitude
    
        const response = await axios.get(`https://macrostrat.org/api/v2/geologic_units/map?lat=${lat}&lng=${lng}`)
        let dataArray = []
        response.data.success.data.forEach(item => {
            dataArray.push(...item.liths)
        })
        let rockTypeData = []
        for(let i = 0;i < dataArray.length;i++) {
            for(let j = 0;j < rockTypes.length;j++) {
                let currentRockType = rockTypes[j]
                if(dataArray[i] === currentRockType.lith_id) {
                    rockTypeData.push(currentRockType)
                    break
                }
            }
        }
        console.log({rockTypeData})
        findPrimaryRockClass(rockTypeData)
    }

    function findPrimaryRockClass(rockTypeData) {
        let rockData = {
            rockClasses: {},
            rockTypes:{},
            rockTypesArray : [],
            rockClassesArray: []
        }
        
        rockTypeData.forEach(item => {
            const rockClass = item.class
            const rockType = item.type
            if(rockData.rockClassesArray.includes(rockClass)) {
                rockData.rockClasses[rockClass] += 1
            }else {
                rockData.rockClasses[rockClass] = 1
                rockData.rockClassesArray.push(rockClass)
            }
            if(rockData.rockTypesArray.includes(rockType)) {
                rockData.rockTypes[rockType] += 1
            }else {
                rockData.rockTypes[rockType] = 1
                rockData.rockTypesArray.push(rockType)
            }
        })
    
        const { rockClasses,rockClassesArray,rockTypes,rockTypesArray } = rockData

        const primaryRockClass = getPrimaryRockData(rockClasses,rockClassesArray)
        const primaryRockType = getPrimaryRockData(rockTypes,rockTypesArray)
        const kindsOfRock = getRockLithos(rockTypeData) 
        console.log({kindsOfRock})
     
        setRockData({primaryRockClass,primaryRockType,kindsOfRock})
    }

    function getRockLithos(rockTypeData) {
        const kindsOfRock = []
        const rockDataArray = []
        rockTypeData.forEach(type => {
            if(!rockDataArray.includes(type.name)) {
                rockDataArray.push(type.name)
                kindsOfRock.push({
                    name:type.name,
                    color:type.color
                })
            }
        })
        return kindsOfRock
    }

    function getPrimaryRockData(rockDataType,rockDataTypeArray) {
        let primaryRockType = rockDataTypeArray.map(item => {
            return rockDataType[item]
        })
        primaryRockType = Math.max(...primaryRockType)
        for(let rockType in rockDataType) {
            if(rockDataType[rockType] === primaryRockType) {
                primaryRockType = rockType
            }
        }
        return primaryRockType
    }

    useEffect(() => {
        const getRockTypes = async () => {
            const response = await axios.get('https://macrostrat.org/api/defs/lithologies?all')
            setRockTypes(response.data.success.data)
        }
        getRockTypes()
    },[])

    useEffect(() => {
        if(!rockTypes.length) return
        getRockData()
    },[props.location])
    
    return (
        <table class='flex flex-col w-2/5 ml-8 bg-slate-200/50 border-2 border-black'>
            <thead>
                <tr class='flex'>
                    <th class='border-r-2 border-black p-1 w-1/5'>Past 7 Rain Total</th>
                    <th class='border-r-2 border-black w-1/5'>Past 3 Rain Total</th>
                    <th class='border-r-2 border-black w-1/5'>Primary Rock Type</th>
                    <th class='border-r-2 border-black w-1/5'>Other Rock Types</th>
                    <th class=' w-1/5'>Days Left to Climb</th>
                </tr>
            </thead>
            <tbody>
                <tr class='flex border-t-2 border-black'>
                    <td class='text-center text-xl font-bold text-blue-600 border-r-2 border-black w-1/5'>
                        {props.totalRain.pastSevenTotal} <i>in</i>
                    </td>
                    <td class='text-center text-xl text-blue-600 font-bold border-r-2 border-black w-1/5'>
                        {props.totalRain.pastThreeTotal} <i>in</i>
                    </td>
                    <td class='flex flex-col gap-1 border-r-2 border-black items-center justify-center w-1/5 p-1'>
                        <div class='border-2 border-black rounded font-bold p-1 w-full'>{rockData.primaryRockClass}</div>
                        <div class='border-2 border-black rounded font-bold p-1 w-full'>{rockData.primaryRockType}</div>
                    </td>
                    <td class='w-1/5 border-r-2 border-black'>
                        <div class='flex flex-col gap-1 p-1'>
                        {rockData.kindsOfRock.map(item => {
                            return (
                                <div class={`text-center rounded font-bold w-full h-full border-2 border-black`} style={{backgroundColor: `${item.color}`}}>
                                    {item.name}
                                </div>
                            )
                        })}
                        </div>
                    </td>
                    <td class='w-1/5'>

                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Summary

// bg-[${item.color}]

{/* <section class='flex flex-col border-2 text-xl border-black h-full w-1/3 mb-8 ml-8 bg-slate-300/70 rounded gap-3'>
            <p>{`The total amount of rain and snow for the past 7 days was ${props.totalRain.pastSevenTotal}`} inches,</p>
            <p>{`The total amount of rain and snow for the last 3 days was ${props.totalRain.pastThreeTotal}`} inches </p>
            <p>{`This area is composed primarily of ${rockData.primaryRockClass} ${rockData.primaryRockType} rock`} </p>
            <p>Based on this information it would be ideal to wait at least 5 days before climbing</p>
            <p>Always check to make sure dirt underneath your climb is dry!</p>
        </section> */}