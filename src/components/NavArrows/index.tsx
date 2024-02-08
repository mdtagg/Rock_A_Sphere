import { ReactComponent as LeftCaret } from '../../assets/svg/left-caret.svg'
import { ReactComponent as RightCaret } from '../../assets/svg/right-caret.svg'
import { useState,useEffect } from 'react'
import { IDataLayer, ReactSetter, TRainData } from '../../containers/App/types/app'

interface NavArrowProps {
    data:TRainData
    setData:ReactSetter<any>
    pages:number
    fullData:any
}

const NavArrows = (props:NavArrowProps) => {

    const { data,setData,pages,fullData } = props
    const [ currentPageIdx, setCurrentPageIdx ] = useState([0,pages])
    const [moveRight,setMoveRight] = useState(false)
    const [moveLeft,setMoveLeft] = useState(false)
    const [start,end] = currentPageIdx


    const bumpRight = 
    moveRight ? 'animate-bumpRight' : ''

    const bumpLeft = 
    moveLeft ? 'animate-bumpLeft' : ''

    function handlePageBack() {
        if(start > 0) {
            setCurrentPageIdx([start - pages,end - pages])
        }
    }

    function handlePageForward() {
        if(end <= fullData.length) {
            setCurrentPageIdx([start + pages,end + pages])
        }
    }

    useEffect(() => {
        const slice = fullData.slice(currentPageIdx[0],currentPageIdx[1])
        setData({...data,dailyData:slice})
    },[currentPageIdx])

    return (
        <div className='flex justify-center items-center'>
            <LeftCaret 
                className={`h-4 w-4 cursor-pointer rounded-full relative ${bumpLeft}`}
                onClick={() => {
                    handlePageBack()
                    setMoveRight(false)
                    setMoveLeft(true)
                }}
                onAnimationEnd={() => {
                    setMoveLeft(false)
                }}
            />
            <RightCaret 
                className={`h-4 w-4 cursor-pointer rounded-full relative ${bumpRight}`}
                onClick={() => {
                    handlePageForward()
                    setMoveLeft(false)
                    setMoveRight(true)
                }}
                onAnimationEnd={() => {
                    setMoveRight(false)
                }}
            />
        </div>
    )
}

export { NavArrows }