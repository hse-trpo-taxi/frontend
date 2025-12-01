import { useGetUserQuery } from '../../../entities/user/api/user-api';
import welcome from '../assets/images/welcome-picture.svg';

export const WelcomeCard = () => {
    const { data } = useGetUserQuery({});
    return (
        <div className="bg-[#F4F4F4] h-[190px] rounded-[30px] pt-[20px] pl-[33px] flex">
            {data && (
                <div className="flex flex-col">
                    <div className="font-[Tuffy] text-[30px] w-[300px]">{`Добро пожаловать, ${data.Name}!`}</div>
                    <div className="text-[14px] mt-auto mb-[20px]">
                        <span>У вас </span>
                        <span className='text-[#1049D9]'>отличный</span>
                        <span> показатель эффективности</span>
                    </div>
                </div>
            )}
            <img src={welcome} className='ml-auto mr-[25px]' />
        </div>
    )
}