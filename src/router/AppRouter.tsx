import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, AuthPage, NotesPage } from '../pages'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/notes" element={<NotesPage />} />
                <Route path="/auth" element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
    )
}
