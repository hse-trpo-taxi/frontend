type ButtonComponentType = {
    name: string;
}

export const ButtonComponent = ({ name }: ButtonComponentType) => {
    return (
        <button className="px-[20px] py-[5px] bg-[#0D162D] rounded-[6px]">
            <p className="text-[12px] text-white">{name}</p>
        </button>
    )
}