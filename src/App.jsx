import { Route,Routes,Link } from 'react-router-dom'
import Home from './pages/Home'
import Precip from './pages/Precip'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/precip' element={<Precip/>}/>
        </Routes>
    )
}

export default App