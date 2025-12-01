import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from '../layout/base-layout';
import { HomePage } from '../../pages/home-page/ui';
import { DriversPage } from '../../pages/drivers-page/ui';
import { OrdersPage } from '../../pages/orders-page/ui';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: 'drivers',
                element: <DriversPage/>
            },
            {
                path: 'orders',
                element: <OrdersPage/>
            }
        ]
    }
])