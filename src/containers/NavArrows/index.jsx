import { ReactComponent as LeftCaret } from '../../assets/svg/left-caret.svg'
import { ReactComponent as RightCaret } from '../../assets/svg/right-caret.svg'
import { useState,useEffect } from 'react'


const NavArrows = (props) => {

    const [totalPages,setTotalPages] = useState(1)

    function handlePageBack() {
        if(
            props.climbingAreas.length <= 6 || 
            !props.climbingAreas.length ||
            props.currentPageIndex === 0
            ) {
                return
            }
        props.setCurrentPageIndex((prevPage) => {
            prevPage -= 1
            return prevPage
        })
    }

    function handlePageForward() {
        if(!props.climbingAreas.length > 6 || 
            !props.climbingAreas.length ||
            props.currentPageIndex === totalPages - 1) {
                return
            }
        props.setCurrentPageIndex((prevPage) => {
            prevPage += 1
            return prevPage
        })
    }

    useEffect(() => {

        if(!props.climbingAreas.length) return 
        const pageNumbers = Math.ceil(props.climbingAreas.length / 6)
        if(props.currentPageIndex === pageNumbers) {
            props.setCurrentPageIndex((prevIndex) => {
                prevIndex -= 1
                return prevIndex
            })
        }
        setTotalPages(pageNumbers)


    },[props.climbingAreas])

    return (
        <div class='flex justify-center items-center'>
            <LeftCaret 
                class='h-4 w-4 hover:bg-slate-500/50 cursor-pointer'
                onClick={handlePageBack}
            />
            <RightCaret 
                class='h-4 w-4 hover:bg-slate-500/50 cursor-pointer'
                onClick={handlePageForward}
            />
        </div>
    )
}

export { NavArrows }