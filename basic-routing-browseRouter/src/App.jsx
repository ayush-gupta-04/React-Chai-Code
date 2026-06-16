import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs, Dashboard, Home, MainLayout } from '../components';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<MainLayout/>}>
                    <Route path='' element = {<Home/>} />
                    <Route path='dashboard' element = {<Dashboard/>} />
                    <Route path='about-us' element = {<AboutUs/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}