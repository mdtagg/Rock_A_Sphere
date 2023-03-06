
import { useState } from 'react'

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
                    coords: latLong
                }
            ]
        })
    }

    function parseLatLong(latLong) {
        latLong = latLong.split(',')
        const latitude = parseFloat(latLong[0]).toFixed(2)
        const longitude = parseFloat(latLong[1]).toFixed(2)
        return {latitude,longitude}
    }

    function handleAreaChange(area) {
        props.setDropdown(false)
        props.setLocation(area)
    }

    return (
        <>
            {!toggleForm &&
            <div class='relative w-full z-10 flex flex-col '>
                {props.climbingAreas.map(area => {
                    return <button class='bg-white border border-black' onClick={() => handleAreaChange(area)} >{area.title}</button>
                })}
                <button class='bg-white border border-black' onClick={handleClick}>Add Area</button>
            </div>}
            {toggleForm &&
            <form onSubmit={(e) => handleSubmit(e)}>
                <div class='flex gap-2'>
                    <label class='font-bold' for='coords'>Latitude/Longitude: </label>
                    <input type='text' id='coords' name='coords' required></input>
                    <label class='font-bold' for='name'>Area Name: </label>
                    <input type='text' id='name' name='title' required></input>
                </div>
                <div class='flex gap-3 justify-center mt-4'>
                    <button class='bg-green-500 text-white border-2 border-black rounded p-1 w-1/5' type='submit'>Add</button>
                    <button class='bg-red-500 rounded text-white border-2 border-black p-1 w-1/5'>Cancel</button>
                </div>
            </form>
            }
        </>
    )
}

export default LocationMenu

{/* <label class='font-bold' for='longitude'>Longitude: </label> */}
                    // <input type='number' id='longitude' name='longitude' required ></input>

{/* <button class='text-black text-3xl rounded flex items-center gap-1'  >
                {props.location.title} 
                <img class='h-5 w-5' src='/downCaret.svg'></img>
        </button> */}

        // <Transition
        //             as={Fragment}
        //             enter="transition ease-out duration-200"
        //             enterFrom="opacity-0 translate-y-1"
        //             enterTo="opacity-100 translate-y-0"
        //             leave="transition ease-in duration-150"
        //             leaveFrom="opacity-100 translate-y-0"
        //             leaveTo="opacity-0 translate-y-1"
        //         ></Transition>

        // <div class="fixed top-16 w-full max-w-sm px-4">
        // <Popover class='relative'>
        //     <Popover.Button class='flex w-full items-center justify-center gap-2'>
        //         <span class='text-3xl'>{props.location.title}</span>
        //         <ChevronDownIcon class='h-5 w-5'/>
                
        //         <Popover.Panel class='flex flex-col'>
                
        //             {props.climbingAreas.map(location => {
        //                 return <button>{location.title}</button>
        //             })}
                   
        //         </Popover.Panel>
        //     </Popover.Button>
        // </Popover>
        // </div>