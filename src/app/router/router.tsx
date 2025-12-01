import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from '../layout/base-layout';
import { HomePage } from '../../pages/home-page/ui';
import { DriversPage } from '../../pages/drivers-page/ui';
import { OrdersPage } from '../../pages/orders-page/ui';
import { SingleDriver } from '../../pages/single-driver/ui';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: 'drivers',
                children: [
                    {
                        index: true,
                        element: <DriversPage />,
                    },
                    {
                        path: ':id',
                        element: <SingleDriver />,
                    },
                ],
            },
            {
                path: 'orders',
                element: <OrdersPage />
            },
        ]
    }
])