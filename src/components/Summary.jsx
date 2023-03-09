import axios from "axios"
import { useState,useEffect } from "react"
import DaysToClimb from "./DaysToClimb"
import { v4 as uuidv4 } from 'uuid';

const Summary = (props) => {

    const [rockTypes,setRockTypes] = useState([])
    const [rockData,setRockData] = useState(
        {
        primaryRockClass:'sedimentary',
        kindsOfRock: 
        [
            {
                name:'sandstone',
                color:'#FFD500'
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
    
        const { rockClasses,rockClassesArray } = rockData
        const primaryRockClass = getPrimaryRockData(rockClasses,rockClassesArray)
        const kindsOfRock = getRockLithos(rockTypeData) 
    
        setRockData({primaryRockClass,kindsOfRock})

    }

    function getRockLithos(rockTypeData) {
        let kindsOfRock = []
        const rockDataArray = []
        const rockClasses = ['sedimentary','igneous','metamorphic']
        rockTypeData.forEach(type => {
            if(
                !rockDataArray.includes(type.name) && 
                !rockClasses.includes(type.name)
            ) {
                rockDataArray.push(type.name)
                kindsOfRock.push({
                    name:type.name,
                    color:type.color
                })
            }
        })
        if(kindsOfRock.length > 7) {
            kindsOfRock = kindsOfRock.slice(0,7)
        }
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
        <table class='flex flex-col w-2/5 bg-slate-200/50 border-2 border-black ml-11'>
            <thead>
                <tr class='flex items-center'>
                    <th class='border-r-2 border-black p-1 w-1/5'>Past 7 Rain Total</th>
                    <th class='border-r-2 border-black w-1/5 p-1'>Past 3 Rain Total</th>
                    <th class='border-r-2 border-black w-1/5 p-1'>Primary Rock Type</th>
                    <th class='border-r-2 border-black w-1/5 p-1'>Other Rock Types</th>
                    <th class=' w-1/5'>Days Of Wet Rock Left</th>
                </tr>
            </thead>
            <tbody>
                <tr class='flex items-center border-t-2 border-black h-full'>
                    <td class='flex justify-center items-center text-xl font-bold text-blue-600 border-r-2 border-black w-1/5 h-full gap-1'>
                        {props.totalRain.pastSevenTotal} <i>in</i>
                    </td>
                    <td class='flex items-center justify-center text-xl text-blue-600 font-bold border-r-2 border-black w-1/5 h-full gap-1'>
                        {props.totalRain.pastThreeTotal} <i>in</i>
                    </td>
                    <td class='flex flex-col gap-1 border-r-2 border-black items-center justify-center w-1/5 p-1 h-full'>
                        <div class='border-2 border-black rounded font-bold p-1 w-full text-center' style={{
                            backgroundColor: 
                            rockData.primaryRockClass === 'sedimentary' ? '#FF8C00' :
                            rockData.primaryRockClass === 'metamorphic' ? '#AC902A' :
                            '#FF0000'
                        }}
                        >
                            {rockData.primaryRockClass}
                        </div>
                    </td>
                    <td class='w-1/5 border-r-2 border-black h-full'>
                        <div class='flex flex-col gap-1 p-1 items-center justify-center h-full'>
                        {rockData.kindsOfRock.map(item => {
                            return (
                                <div 
                                    class={`text-center rounded font-bold w-full border-2 border-black`} 
                                    style={{backgroundColor: `${item.color}`}}
                                    key={uuidv4()}
                                >
                                    {item.name}
                                </div>
                            )
                        })}
                        </div>
                    </td>
                    <td class='w-1/5'>
                        
                        <DaysToClimb 
                            totalRain={props.totalRain}
                            rockData={rockData}
                        />
                
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Summary
