
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const LocationMenu = (props) => {

    const [toggleForm,setToggleForm] = useState(false)

    function handleClick() {
        setToggleForm(true)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setToggleForm(false)
        const latLong = parseLatLong(e.target[0].value)
        const areaTitle = e.target[1].value
        props.setClimbingAreas((prevAreas) => {
            return [
                ...prevAreas,
                {
                    title:areaTitle,
                    coords: latLong,
                    id:uuidv4()
                }
            ]
        })
    }

    function parseLatLong(latLong) {
        latLong = latLong.split(',')
        //removes parenthesis from coordinates
        if(latLong[0][0] === '(' || latLong[1][latLong.length - 1] === ')') {
            const latitude = parseFloat(latLong[0].slice(1)).toFixed(2)
            const longitude = parseFloat(latLong[1].slice(0,latLong[1].length - 1)).toFixed(2)
            return {latitude,longitude}
        }
        const latitude = parseFloat(latLong[0]).toFixed(2)
        const longitude = parseFloat(latLong[1]).toFixed(2)
    
        return {latitude,longitude}
    }

    function handleAreaChange(area) {
        props.setDropdown(false)
        props.setLocation(area)
    }

    function handleCancel() {
        setToggleForm(false)
    }

    function handleDelete(e) {
        e.preventDefault()
        const { id } = e.target.dataset
        const filteredAreas = props.climbingAreas.filter(area => area.id !== id)
        props.setClimbingAreas(filteredAreas)
    }

    return (
        <>
            {!toggleForm &&
            <div class='flex flex-col gap-3 w-full'>
                <div class='grid grid-rows-3 grid-flow-col w-full gap-1'>
                    {props.climbingAreas.map(area => {
                        return (
                            <div class='flex justify-between gap-3 bg-white rounded border border-black pl-1 sm:text-sm' key={uuidv4()}>
                                <button 
                                    class='flex justify-start items-center w-full' 
                                    onClick={() => handleAreaChange(area)} 
                                >
                                    {area.title}
                                </button>
                                <button 
                                    class='font-bold hover:bg-red-500/50 p-1'
                                    data-id={area.id} 
                                    onClick={(e) => handleDelete(e)}
                                >
                                    x
                                </button>
                            </div>
                        )

                    })}
                </div>
                <button class='flex justify-center gap-1 items-center bg-white border-2 border-black w-full rounded p-1 hover:bg-green-500' onClick={handleClick}>
                    <img class='h-4 w-4' src='plus.svg'></img>
                    Add Area
                </button>
            </div>
            }
            
            {toggleForm &&
            <form onSubmit={(e) => handleSubmit(e)}>
                <div class='flex gap-2 sm:flex-col'>
                    <label class='font-bold' htmlFor='coords'>Latitude/Longitude: </label>
                    <input class='border-2 border-black placeholder:text-xs' placeholder='copy and paste from google maps' type='text' id='coords' name='coords' required></input>
                    <label class='font-bold' htmlFor='name'>Area Name: </label>
                    <input class='border-2 border-black' type='text' id='name' name='title' required></input>
                </div>
                <div class='flex gap-3 justify-center mt-4'>
                    <button class='bg-green-500 text-white border-2 border-black rounded p-1 w-1/5 sm:w-1/2' type='submit'>Add</button>
                    <button class='bg-red-500 rounded text-white border-2 border-black p-1 w-1/5 sm:w-1/2' onClick={handleCancel}>Cancel</button>
                </div>
            </form>
            }
        </>
    )
}

export default LocationMenu
