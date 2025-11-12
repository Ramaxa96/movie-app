import AllMovies from '../AllMovies/AllMovies'
import MainPage from '../MainPage/MainPage'

import {Route, Routes} from "react-router"

const AppRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='all-movies' element={<AllMovies />} />
        </Routes>
    )
}

export default AppRouters