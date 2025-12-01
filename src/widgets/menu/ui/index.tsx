import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../shared/assets/images/logo.svg';
import homeBlue from '../../../shared/assets/images/home-blue.svg';
import home from '../../../shared/assets/images/home.svg';
import driversBlue from '../../../shared/assets/images/drivers-blue.svg';
import drivers from '../../../shared/assets/images/drivers.svg';
import ordersBlue from '../../../shared/assets/images/order-blue.svg';
import orders from '../../../shared/assets/images/order.svg';
import logOut from '../../../shared/assets/images/log-out.svg';

type TabType = 'home' | 'drivers' | 'orders';

export const Menu = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const tab = 'ml-auto mr-auto w-[40px] h-[40px] rounded-[11px] flex justify-center';
    const white = 'bg-white';
    const blue = 'cursor-pointer';
    const shadow = '[filter:drop-shadow(4px_0_10px_rgba(0,0,0,0.25))_drop-shadow(0_4px_4px_rgba(0,0,0,0.25))_drop-shadow(0_-10px_22px_rgba(0,0,0,0.2))]';

    const [activeTab, setActiveTab] = useState<TabType>('home');

    useEffect(() => {
        if (location.pathname.startsWith('/drivers')) {
            setActiveTab('drivers')
        } else if (location.pathname.startsWith('/orders')) {
            setActiveTab('orders')
        } else {
            setActiveTab('home')
        }
    }, [location.pathname])

    return (
        <div className={`bg-[#0D162D] h-[100%] rounded-[24px] w-[98px] flex flex-col ${shadow}`}>
            <img src={logo} className='ml-auto mr-auto pt-[30px]' />
            <div className="flex flex-col mt-auto mb-auto">
                <div className={`${tab} ${activeTab === 'home' ? white : blue}`}
                    onClick={() => { navigate('/'); setActiveTab('home') }}>
                    {activeTab === 'home' ? (
                        <img src={homeBlue} className='w-[20px]' />
                    ) : (
                        <img src={home} className='w-[20px]' />
                    )}
                </div>
                <div className={`${tab} ${activeTab === 'drivers' ? white : blue} mt-[55px]`}
                    onClick={() => { navigate('/drivers'); setActiveTab('drivers') }}>
                    {activeTab === 'drivers' ? (
                        <img src={driversBlue} className='w-[22px]' />
                    ) : (
                        <img src={drivers} className='w-[22px]' />
                    )}
                </div>
                <div className={`${tab} ${activeTab === 'orders' ? white : blue} mt-[55px]`}
                    onClick={() => { navigate('/orders'); setActiveTab('orders') }}>
                    {activeTab === 'orders' ? (
                        <img src={ordersBlue} className='w-[20px]' />
                    ) : (
                        <img src={orders} className='w-[20px]' />
                    )}
                </div>
            </div>
            <img src={logOut} className='cursor-pointer ml-auto mr-auto mt-auto mb-[30px]' />
        </div>
    )
}