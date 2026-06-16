import {
    createBrowserRouter,
} from 'react-router-dom';

import {
    AboutUs,
    Dashboard,
    Home,
    MainLayout,
    Product,
} from '../components';

import productLoader from '../utils/productLoader';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'about-us',
                element: <AboutUs />,
            },
            {
                path: 'product/:id',
                element: <Product />,
                errorElement: <div>Something went wrong.</div>,
                hydrateFallbackElement : <div>Loading...</div>,
                loader: productLoader,
            },
        ],
    },
]);

export default router;