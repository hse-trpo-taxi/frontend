type ScoreType = {
    score: number;
    description: string;
}

export const Score = ({ score, description }: ScoreType) => {

    const getColor = () => {
        if (score === 5) return '#1049D9'
        else if (score >= 4) return '#293A8C'
        else return '#758AE5'
    }

    const color = getColor();

    return (
        <div className="flex flex-col items-center justify-center w-[64px] gap-[5px]">
            <p className='w-[34px] h-[34px] text-[16px] rounded-full border-2 flex items-center justify-center'
                style={{ color: color, borderColor: color }}>{score}</p>
            <p className='text-[8px] text-center max-w-[64px]' style={{ color: color }}>{description}</p>
        </div>
    )
}