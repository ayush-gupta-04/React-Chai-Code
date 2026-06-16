import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

import {
    AboutUs,
    Dashboard,
    Home,
    MainLayout,
    Product,
} from '../components';

import productLoader from '../utils/productLoader';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element = {<MainLayout/>}>
            <Route 
                path='' 
                element = {<Home/>} 
            />
            <Route 
                path='dashboard' 
                element = {<Dashboard/>} 
            />
            <Route 
                path='about-us' 
                element = {<AboutUs/>} 
            />
            <Route 
                path='product/:id' 
                loader={productLoader}
                errorElement = {<div>Something went wrong.</div>}
                hydrateFallbackElement = {<div>Loading...</div>}
                element = {<Product/>} 
            />
        </Route>
    )
);

export default router;