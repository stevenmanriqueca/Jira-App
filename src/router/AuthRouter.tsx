import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { authRoutes } from './';

const AuthRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    authRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))
                }
                <Route path="*" element={<Navigate replace to={authRoutes[0].path} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AuthRouter