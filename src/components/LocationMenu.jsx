import { Popover, Transition } from '@headlessui/react'
import { Fragment,useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const LocationMenu = (props) => {

console.log(props.climbingAreas)

    return (
        <Popover class='flex flex-col '>
            <Popover.Button className='flex w-full items-center justify-center gap-2'>
                <span className='text-3xl'>{props.location.title}</span>
                <ChevronDownIcon className='h-5 w-5'/>
                
                <Popover.Panel className='flex flex-col'>
                
                    {props.climbingAreas.map(location => {
                        return <button>{location.title}</button>
                    })}
                   
                </Popover.Panel>
            </Popover.Button>
        </Popover>
    )
}

export default LocationMenu

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