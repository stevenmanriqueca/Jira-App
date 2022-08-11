import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/navbar'
import { mainRoutes } from './';
const MainRouter = () => {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                {
                    mainRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))
                }
                <Route path="*" element={<Navigate replace to={mainRoutes[0].path} />} />
            </Routes>
        </HashRouter>
    )
}

export default MainRouter