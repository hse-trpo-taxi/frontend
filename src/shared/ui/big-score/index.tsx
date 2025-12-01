import starIcon from '../../assets/images/star.svg';

type BigScoreType = {
    score: number;
    star: boolean;
    name: string;
}

export const BigScore = ({score, star, name} : BigScoreType) => {
    return (
        <div className="bg-[#F4F4F4] flex gap-[5px] rounded-[14px] px-[14px] py-[5px] text-[#0D162D] mb-[20px]">
            <h2 className="text-[44px]">{score}</h2>
            <div className='mb-auto mt-[5px]'>
                {star ? (
                    <img src={starIcon}/>
                ) : <p className='text-[10px]'>мин</p>}
            </div>
            <p className='text-[12px] mt-auto mb-auto'>{name}</p>
        </div>
    )
}