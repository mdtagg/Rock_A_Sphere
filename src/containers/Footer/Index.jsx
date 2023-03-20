import { ReactComponent as GitHubImg } from '../../assets/svg/github.svg'

const Footer = () => {
    return (
        <footer class='flex items-center h-10 bg-gray-100/75 justify-between wide:h-6 md:hidden'>
            <div class='flex justify-center m-auto items-center gap-2'>
                <p class='text-black text-2xl font-medium sm:text-sm sm:font-medium wide:text-sm'>Developed by Michael Tagg</p>
                <a href='https://github.com/mdtagg'>
                    <GitHubImg
                        class='h-5 w-5 wide:h-3 wide:w-3'
                    />
                </a>
            </div>
            <div  class='text-black text-xs flex flex-col items-end' style={{lineHeight:'10px',fontSize:'8px'}}>
                <p>Background Photo By: </p>
                <p>
                    <a href='https://unsplash.com/@aaronburden'><i>Aaron Burden</i></a>
                </p>
            </div>
        </footer>
    )
}

export default Footer